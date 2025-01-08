export const statusCode = {
  SUCCESS: {
    code: 200,
    description: 'Tudo ocorreu com sucesso',
  },
  NO_CONTENT: {
    code: 204,
    description: 'Retorno sem conteúdo',
  },
  BAD_REQUEST: {
    code: 400,
    description: 'Você esqueceu de passar algum parâmetro na requisição',
  },
  UNAUTHORIZED: {
    code: 401,
    description: 'Você precisa de um token de autenticação, ou o seu token expirou',
  },
  NEED_TOKEN: {
    code: 403,
    description: 'Você não tem permissão para acessar essa região.',
  },
  TOO_MANY_REQUESTS: {
    code: 429,
    describe: 'Many requests',
  },
  NOT_FOUND: {
    code: 404,
    description: 'Nenhum arquivo encontrado',
  },
  NOT_ALLOWED: {
    code: 405,
    description: 'Método Não Permitido',
  },
  CONFLICT: {
    code: 409,
    description: 'Item já existe',
  },
  ERROR_IN_SERVER: {
    code: 500,
    description: 'Erro no servidor',
  },
};
