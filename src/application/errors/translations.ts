import { ModelsI18nType } from '@/infrastructure/config/i18nInterface';

export const translationErrorsResources: ModelsI18nType = {
  en: {
    USERNAME_ALREADY_EXISTS: "Username '{{username}}' already exists",
    POST_NOT_EXISTS: "Post '{postId}' not exists",
    NO_CAN_DELETE_POST_ANOTHER_USER: 'You not can delete post another user',
    INVALID_PASSWORD: 'Password is invalid',
    CODE_NOT_FOUND: 'code not exists',
    USER_NOT_FOUND: "User '{{username}}' not found",
    USER_ID_NOT_FOUND: "UserId '{{id}}' not found",
    SUGGESTION_NOT_FOUND: 'Suggestion not found',
    INTERNAL_ERROR: 'Internal Server Error',
    UNKNOWN_ERROR: 'Error not mapped',
    ENTITY_INVALID: 'Invalid state',
  },

  ptBr: {
    USERNAME_ALREADY_EXISTS: "Usuário '{{username}}' já existe",
    POST_NOT_EXISTS: "Post '{postId}' não existe",
    NO_CAN_DELETE_POST_ANOTHER_USER: 'Você não pode deletar um post de outro usuário',
    INVALID_PASSWORD: 'Senha é invalida',
    CODE_NOT_FOUND: 'Código não existe',
    USER_NOT_FOUND: "Usuário '{{username}}' não existe",
    USER_ID_NOT_FOUND: "Usuário id '{{id}}' não existe",
    SUGGESTION_NOT_FOUND: 'Sugestão não encontrada',
    INTERNAL_ERROR: 'Internal Server Error',
    UNKNOWN_ERROR: 'Error not mapped',
    ENTITY_INVALID: 'Estado interno inválido',
  },
};
