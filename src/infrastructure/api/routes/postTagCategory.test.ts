import { statusCode } from '@/api/config/statusCode';
import { createDatabaseMock, requestMock } from '../../../test/utils';

const databaseMock = createDatabaseMock();
let views = 0;

describe('Views', () => {
  beforeAll(async () => {
    await databaseMock.e2eTestConnect();
  });

  afterAll(async () => {
    await databaseMock.e2eDrop();
    await databaseMock.close();
  });

  it('should return initial state views', async () => {
    const res = await requestMock.get('/views');
    expect(res.body.countAll).toBeDefined();
    expect(res.body.countIps).toBeDefined();

    const data = {
      body: {
        ...res.body,
        countAll: 33,
        countIps: 1,
      },
    };

    expect(res.statusCode).toEqual(200);
    expect(data.body).toEqual({ countAll: 33, countIps: 1 });
    views = res.body.countAll;
  });

  it('should create a view', async () => {
    const res = await requestMock.post('/views').send({});

    expect(res.body).toEqual({});
    expect(res.statusCode).toEqual(204);
  });

  it('should add new view', async () => {
    const res = await requestMock.get('/views');
    expect(res.statusCode).toEqual(statusCode.SUCCESS.code);
    expect(res.body.countAll).toEqual(views + 1);
  });
});
