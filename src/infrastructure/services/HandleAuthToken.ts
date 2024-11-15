import { HandleAuthTokenInterface } from '@/application/services/HandleAuthToken';
import { Log } from '@/infrastructure/api/logs';
import jwt from 'jsonwebtoken';

export class HandleAuthToken implements HandleAuthTokenInterface {
  constructor() {}

  async generate(
    payload: { username: string; name: string; userId: string },
    config: { expiresIn: '128h'; secret: string },
  ): Promise<{ errors: null | 'ANY_ERROR'; data: { token: string; userId: string } | null }> {
    return new Promise((resolve, reject) => {
      jwt.sign(payload, config.secret, { expiresIn: config.expiresIn }, (error, token) => {
        if (error || token === undefined) {
          const context =
            error instanceof Error ? { message: error.message, name: error.name } : { error: String(error) };
          Log.error(`Error on generate token error`, { token, ...context });
          return resolve({ data: null, errors: 'ANY_ERROR' });
        }

        resolve({ data: { token, userId: payload.userId }, errors: null });
      });
    });
  }
}
