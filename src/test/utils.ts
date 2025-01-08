/* eslint-disable import/no-extraneous-dependencies */
import supertest from 'supertest';
import { SECURITY_CODE } from '@/api/config/envs';
import testAgent from 'supertest/lib/agent';
import { Database } from '@/api/database/database';
import { app } from '../infrastructure/api/app';

const mockTests = {
  username2: 'userTest',
  password2: 'userTest',
};

const post = {
  title: 'Titulo de um post maluco',
  description: 'Descrição maluca',
  tags: {
    moment: 'ComeçoPartida',
    difficult: 'hard',
    ability: 'Spot',
    side: 'Atacantes',
    map: 'Ascent',
    mapPosition: 'heaven',
    agent: 'Sova',
  },
  imgs: [
    {
      id: '1',
      description: 'Primeiro mire no pontinho roxo indicado',
      image: 'image/pontinho.png',
    },
    {
      id: '2',
      description: 'Depois solte a flexa com 1.5 de força',
      image: 'img/pontinho2.png',
    },
  ],
};

export const requestMock = supertest(app);
export const createDatabaseMock = () => new Database({ verbose: false });

export const createUserMocker = async (): Promise<{
  userId: string;
  authorization: {
    authorization: string;
  };
}> => {
  const responseGenerateCode = await requestMock.post('/code').send({ securityCode: SECURITY_CODE });

  const codeGenerate = responseGenerateCode.body.token;

  await requestMock
    .post('/users')
    .send({ username: mockTests.username2, password: mockTests.password2, code: codeGenerate });

  const responseCreateUser = await requestMock
    .post('/auth')
    .send({ username: mockTests.username2, password: mockTests.password2 });

  const authorization = { authorization: `${responseCreateUser.body.token}` };

  return { userId: responseCreateUser.body.id, authorization };
};

export const createPostMocker = async (authorization: {
  authorization: string;
}): Promise<{
  postId: string;
}> => {
  const response = await requestMock.post('/posts').set(authorization).send(post);

  return { postId: response.body.id };
};

// @ts-ignore
export const handleAuthToken = async (requestMockItem: testAgent<supertest.SuperTestStatic.Test>): Promise<string> => {
  const res = await requestMockItem.post('/code').send({ securityCode: SECURITY_CODE });
  return res.body.token;
};
