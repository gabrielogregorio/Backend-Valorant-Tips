export type languageMapsType = 'en' | 'ptBr';

export type modelsI18nType = { [key in languageMapsType]: { [key: string]: string } };
