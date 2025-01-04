type HandleAuthTokenPayload = { username: string; name: string; userId: string };

type HandleAuthTokenConfig = {
  expiresIn: '128h';
  secret: string;
};

type HandleAuthTokenResponse = { errors: null | 'ANY_ERROR'; data: { token: string; userId: string } | null };

export interface HandleAuthTokenInterface {
  generate(payload: HandleAuthTokenPayload, config: HandleAuthTokenConfig): Promise<HandleAuthTokenResponse>;
}
