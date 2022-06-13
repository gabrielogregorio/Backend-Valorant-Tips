/* eslint-disable no-underscore-dangle */
import dotenv from 'dotenv';
import supertest from 'supertest';
import { connection } from './mockMongoose';

import { app } from '../app';

dotenv.config();

const request = supertest(app);

let token = { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5c' };
let codeGenerate = 'código enviado pelos devs';
let codeGenerate2 = 'código enviado pelos devs';

let newUser = {
  code: 'código enviado pelos devs',
  username: 'lucia santos teste',
  password: '1234abc',
};

afterAll(async () => {
  await connection.connection.close();
});

beforeAll(async () => {
  const res = await request.post('/generate_code').send({ GENERATOR_CODE: process.env.GENERATOR_CODE });

  codeGenerate = res.body.code;
  newUser = { ...newUser, code: codeGenerate };
  const res2 = await request.post('/generate_code').send({ GENERATOR_CODE: process.env.GENERATOR_CODE });

  codeGenerate2 = res2.body.code;
});

describe('👤 Usuários', () => {
  /* doc: O cadastro de usuário precisa ser solicitada aos desenvolvedores */

  it('[doc]: ✅ Cadastrar um usuário', async () => {
    const response = await request.post('/user').send(newUser);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ username: 'lucia santos teste' });
  });

  it('[doc]: 🚫 Impede o cadastro de um usuário que já existe', async () => {
    const response = await request.post('/user').send({
      code: codeGenerate2,
      username: 'lucia santos teste',
      password: '1234abc',
    });

    expect(response.body).toEqual({ error: 'Username is already registered' });
    expect(response.statusCode).toEqual(409);
  });

  it('✅ setup - Deve fazer login no sistema e obter um token', async () => {
    const response = await request.post('/auth').send({
      username: 'lucia santos teste',
      password: '1234abc',
    });

    // @ts-ignore
    token = { authorization: `Bearer ${response.body.token}` };
  });

  it('[doc]: ✅ Obter a si mesmo', async () => {
    const response = await request.get(`/user`).set(token);

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({ username: 'lucia santos teste' });
  });

  it('[doc]: ✅ atualiza dados de si mesmo', async () => {
    const response = await request.put(`/user`).set(token).send({
      username: 'julia',
      password: 'abc987',
    });

    expect(response.body).toEqual({ username: 'lucia santos teste' });
    expect(response.statusCode).toEqual(200);
  });

  it('[doc]: 🚫 impede de obter usuário sem token', async () => {
    const response = await request.get(`/user`);

    expect(response.body).toEqual({});
    expect(response.statusCode).toEqual(403);
  });

  it('[doc]: 🚫 impede edição de usuário sem token', async () => {
    const response = await request.put(`/user`).send({
      username: 'testeQualquerCoisa',
      password: 'usuarioNotExists',
    });

    expect(response.body).toEqual({});
    expect(response.statusCode).toEqual(403);
  });

  it('[doc]: 🚫 impede usuário sem token de deletar', async () => {
    const response = await request.delete(`/user`);

    expect(response.body).toEqual({});
    expect(response.statusCode).toEqual(403);
  });

  it('[doc]: ⚠️ deletar a si mesmo', async () => {
    /* doc: Isso remove a conta do próprio usuário */
    const response = await request.delete(`/user`).set(token);

    expect(response.body).toEqual({});
    expect(response.statusCode).toEqual(200);
  });
});
