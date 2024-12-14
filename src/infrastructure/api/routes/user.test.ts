import supertest from 'supertest';
import { createDatabaseMock, handleAuthToken } from '../../../test/utils';
import { app } from '../app';

const databaseMock = createDatabaseMock();

const requestMock = supertest(app);
let token = { authorization: 'eyJhbGciOiJIUzI1NiIsInR5c' };

describe('Users', () => {
  beforeAll(async () => {
    await databaseMock.e2eTestConnect();
  });

  afterAll(async () => {
    await databaseMock.e2eDrop();
  });

  it('should register a user', async () => {
    const code = await handleAuthToken(requestMock);
    const response = await requestMock.post('/users').send({
      code,
      username: 'lucia santos teste',
      password: '1234abc',
    });
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({});
  });

  it('should bock register when user already exists', async () => {
    const code = await handleAuthToken(requestMock);
    const payload = {
      code,
      username: 'lucia santos teste',
      password: '1234abc',
    };

    const response = await requestMock.post('/users').send(payload);

    expect(response.body).toEqual({
      error: 'USERNAME_ALREADY_EXISTS',
    });
    expect(response.statusCode).toEqual(409);
  });

  it('should get self', async () => {
    const response = await requestMock.post('/auth').send({
      username: 'lucia santos teste',
      password: '1234abc',
    });

    token = { authorization: `${response.body.token}` };

    const responseGetMe = await requestMock.get(`/users/me`).set(token);

    expect(responseGetMe.statusCode).toEqual(200);
    expect(responseGetMe.body).toEqual({ username: 'lucia santos teste', image: '' });
  });

  it('should update self', async () => {
    const response = await requestMock.patch(`/users`).set(token).send({
      username: 'julia',
      password: 'abc987',
    });

    expect(response.body).toEqual({});
    expect(response.statusCode).toEqual(200);
  });

  it('should block return without token', async () => {
    const response = await requestMock.get(`/users/me`);

    expect(response.body).toEqual({ message: 'TOKEN_IS_INVALID_OR_EXPIRED' });
    expect(response.statusCode).toEqual(401);
  });

  it('should block edit without token edição de usuário sem token', async () => {
    const response = await requestMock.patch(`/users`).send({
      username: 'testeQualquerCoisa',
      password: 'usuarioNotExists',
    });

    expect(response.body).toEqual({ message: 'TOKEN_IS_INVALID_OR_EXPIRED' });
    expect(response.statusCode).toEqual(401);
  });

  it('block delete without token', async () => {
    const response = await requestMock.delete(`/users`);

    expect(response.body).toEqual({ message: 'TOKEN_IS_INVALID_OR_EXPIRED' });
    expect(response.statusCode).toEqual(401);
  });

  it('should delete self', async () => {
    const response = await requestMock.delete(`/users`).set(token);

    expect(response.body).toEqual({});
    expect(response.statusCode).toEqual(204);
  });
});
