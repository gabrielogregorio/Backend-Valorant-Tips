type handleAuthTokenPayload = { username: string; name: string; userId: string };

type handleAuthTokenConfig = {
  expiresIn: '128h';
  secret: string;
};

type handleAuthTokenResponse = { errors: null | 'ANY_ERROR'; data: { token: string; userId: string } | null };

export interface handleAuthTokenInterface {
  generate(payload: handleAuthTokenPayload, config: handleAuthTokenConfig): Promise<handleAuthTokenResponse>;
}
