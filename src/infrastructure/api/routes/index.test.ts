import { statusCode } from '@/api/config/statusCode';
import { createDatabaseMock, requestMock } from '../../../test/utils';

const databaseMock = createDatabaseMock();

describe('Server', () => {
  beforeAll(async () => {
    await databaseMock.e2eTestConnect();
  });

  afterAll(async () => {
    await databaseMock.e2eDrop();
    await databaseMock.close();
  });

  it('should application response on get /', async () => {
    const res = await requestMock.get('/');

    expect(res.statusCode).toEqual(statusCode.SUCCESS.code);
  });
});
