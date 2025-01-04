import { translationErrorsResources } from '@/application/errors/translations';
import { ContextType } from '@/infrastructure/api/logs/types';
import { LanguageMapsType, ModelsI18nType } from '@/infrastructure/config/i18nInterface';

type ModelsI18nLibType = { [key in LanguageMapsType]: { translation: { [key: string]: string } } };

class I18nTranslate {
  model: ModelsI18nLibType;

  constructor() {
    this.model = this._formatToResourcesI18n([translationErrorsResources]);
  }

  private _formatToResourcesI18n(models: ModelsI18nType[]): ModelsI18nLibType {
    const resourceI18n: ModelsI18nLibType = { ptBr: { translation: {} }, en: { translation: {} } };
    models.forEach((model) => {
      const keys = Object.keys(model) as LanguageMapsType[];
      keys.forEach((key) => {
        resourceI18n[key].translation = { ...resourceI18n[key].translation, ...model[key] };
      });
    });

    return resourceI18n;
  }

  private _languageIsValid(language: unknown): language is LanguageMapsType {
    return language === 'en' || language === 'ptBr';
  }

  translate(language: unknown, code: string, context?: ContextType): string {
    if (!this._languageIsValid(language)) {
      return `Language '${language}' is invalid`;
    }

    let message = this.model[language].translation[code];
    if (!message) {
      return `Code '${code}' is invalid to language '${language}'`;
    }

    if (!context) {
      return message;
    }

    const contextItems = Object.keys(context) as (keyof typeof context)[];
    contextItems.forEach((key) => {
      message = message.replace(new RegExp(`{{${key}}}`, 'g'), context[key]?.toString() ?? '');
    });

    return message;
  }
}

export const i18nTranslate = new I18nTranslate();
