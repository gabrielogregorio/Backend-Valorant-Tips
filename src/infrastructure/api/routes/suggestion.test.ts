import { createDatabaseMock, createPostMocker, createUserMocker, requestMock } from '../../../test/utils';

const databaseMock = createDatabaseMock();

let authorization: Record<string, string> = { authorization: '' };
let postIdReal = '';
let idCreatedSuggestion = '';
let suggestionPayload = {
  postId: '',
  email: '',
  description: '',
};

describe('Suggestions', () => {
  beforeAll(async () => {
    jest.useRealTimers();

    await databaseMock.e2eTestConnect();

    const userMock = await createUserMocker();
    const { postId } = await createPostMocker(userMock.authorization);

    authorization = userMock.authorization;
    postIdReal = postId;

    suggestionPayload = {
      postId: postIdReal,
      email: 'gab@gab.com',
      description: 'Eu acho que seria...',
    };
  });

  afterAll(async () => {
    await databaseMock.e2eDrop();
    await databaseMock.close();
  });

  test('should send a suggestion ', async () => {
    const res = await requestMock.post('/suggestions').send(suggestionPayload);

    expect(res.body).toEqual({
      postId: postIdReal,
      email: suggestionPayload.email,
      description: suggestionPayload.description,
      status: 'waiting',
      id: expect.stringContaining(''),
      createdAt: expect.stringContaining(''),
      updatedAt: expect.stringContaining(''),
    });

    expect(res.statusCode).toEqual(200);
    idCreatedSuggestion = res.body.id;
  });

  test('should prevents the recording of a suggestion without correct content', async () => {
    const res = await requestMock.post('/suggestions').send({
      ...suggestionPayload,
      description: '',
    });

    expect(res.body).toEqual({ message: 'PAYLOAD_IS_INVALID' });
    expect(res.statusCode).toEqual(400);
  });

  test('should return 400 when not passing parameters', async () => {
    const res = await requestMock.post('/suggestions').send();

    expect(res.body).toEqual({
      message: 'PAYLOAD_IS_INVALID',
    });
    expect(res.statusCode).toEqual(400);
  });

  test('should returns all suggestions if authorized', async () => {
    const response = await requestMock.get('/suggestions').set(authorization);

    const expectedResponse = {
      ...suggestionPayload,
      id: idCreatedSuggestion,
      status: 'waiting',
      createdAt: expect.stringContaining(''),
      updatedAt: expect.stringContaining(''),
    };

    expect(response.body).toEqual([expectedResponse]);

    expect(response.statusCode).toEqual(200);
  });

  test('should prevents unauthorized users from see suggestions', async () => {
    const res = await requestMock.get('/suggestions');

    expect(res.body).toEqual({ message: 'TOKEN_IS_INVALID_OR_EXPIRED' });
    expect(res.statusCode).toEqual(401);
  });

  test('should update status suggestion to accepted', async () => {
    const res = await requestMock
      .put(`/suggestions/${idCreatedSuggestion}`)
      .set(authorization)
      .send({ status: 'accepted' });

    expect(res.body).toEqual({
      id: idCreatedSuggestion,
      postId: postIdReal,
      email: suggestionPayload.email,
      description: suggestionPayload.description,
      status: 'accepted',
      createdAt: expect.stringContaining(''),
      updatedAt: expect.stringContaining(''),
    });

    expect(res.statusCode).toEqual(200);
  });

  test('should update status to rejected', async () => {
    const response = await requestMock
      .put(`/suggestions/${idCreatedSuggestion}`)
      .set(authorization)
      .send({ status: 'rejected' });

    const responseBodyExpected = {
      id: idCreatedSuggestion,
      postId: postIdReal,
      email: suggestionPayload.email,
      description: suggestionPayload.description,
      status: 'rejected',
      createdAt: expect.stringContaining(''),
      updatedAt: expect.stringContaining(''),
    };

    expect(response.body).toEqual(responseBodyExpected);

    expect(response.statusCode).toEqual(200);
  });

  test('should prevent update status without token', async () => {
    const response = await requestMock.put(`/suggestions/${idCreatedSuggestion}`).send({ status: 'accepted' });

    expect(response.body).toEqual({ message: 'TOKEN_IS_INVALID_OR_EXPIRED' });
    expect(response.statusCode).toEqual(401);
  });

  test('should prevent update status to invalid status', async () => {
    const res = await requestMock.put(`/suggestions/${idCreatedSuggestion}`).set(authorization).send({ status: 'any' });

    expect(res.body).toEqual({
      message: 'PAYLOAD_IS_INVALID',
    });
    expect(res.statusCode).toEqual(400);
  });

  test('should delete suggestions', async () => {
    const res = await requestMock.delete(`/suggestions/${idCreatedSuggestion}`).set(authorization);

    expect(res.body).toEqual({});
    expect(res.statusCode).toEqual(204);
  });

  test('should prevent delete suggestion if not has token', async () => {
    const res = await requestMock.delete(`/suggestions/${idCreatedSuggestion}`);

    expect(res.body).toEqual({ message: 'TOKEN_IS_INVALID_OR_EXPIRED' });
    expect(res.statusCode).toEqual(401);
  });
});
