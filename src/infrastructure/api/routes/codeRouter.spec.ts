import { SECURITY_CODE } from '@/api/config/envs';
import { createDatabaseMock, requestMock } from '../../../test/utils';

const databaseMock = createDatabaseMock();

let codeGenerate = '';
let generateCode = 'HA1496FD';
generateCode = SECURITY_CODE;
const validKey = { securityCode: generateCode };

describe('GenerateUserKeys', () => {
  beforeAll(async () => {
    await databaseMock.e2eTestConnect();
  });

  afterAll(async () => {
    await databaseMock.e2eDrop();
    await databaseMock.close();
  });

  it('should create a user key', async () => {
    const res = await requestMock.post('/code').send(validKey);

    expect(res.statusCode).toEqual(200);
    expect(res.body.token.length).toBeGreaterThan(10);
    codeGenerate = res.body.token;
  });

  it('should block generation key with invalid token', async () => {
    const res = await requestMock.post('/code').send({ securityCode: 'Qualquer chave' });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toEqual({
      message: 'TOKEN_IS_INVALID_OR_EXPIRED',
    });
  });

  it('should register a user', async () => {
    const newUser = await requestMock.post('/users').send({
      code: codeGenerate,
      username: 'username test',
      password: 'password test',
    });

    expect(newUser.body).toEqual({});
  });

  it('should make authentication with valid user', async () => {
    const newUser = await requestMock.post('/auth').send({
      username: 'username test',
      password: 'password test',
    });

    expect(newUser.body).toEqual({ id: expect.stringContaining(''), token: expect.stringContaining('') }); // fixme
  });

  it('should block register with repeated token', async () => {
    const res = await requestMock.post('/users').send({
      code: codeGenerate,
      username: 'username test',
      password: 'password test',
    });

    expect(res.body).toEqual({ error: 'CODE_NOT_FOUND' });
    expect(res.statusCode).toEqual(409);
  });
});
