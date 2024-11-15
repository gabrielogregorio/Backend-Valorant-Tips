import { translationErrorsResources } from '@/application/errors/translations';
import { contextType } from '@/infrastructure/api/logs/types';
import { languageMapsType, modelsI18nType } from '@/infrastructure/config/i18nInterface';

type modelsI18nLibType = { [key in languageMapsType]: { translation: { [key: string]: string } } };

class I18nTranslate {
  model: modelsI18nLibType;

  constructor() {
    this.model = this.formatToResourcesI18n([translationErrorsResources]);
  }
  private formatToResourcesI18n(models: modelsI18nType[]): modelsI18nLibType {
    const resourceI18n: modelsI18nLibType = { 'pt-br': { translation: {} }, en: { translation: {} } };
    models.forEach((model) => {
      const keys = Object.keys(model) as languageMapsType[];
      keys.forEach((key) => {
        resourceI18n[key].translation = { ...resourceI18n[key].translation, ...model[key] };
      });
    });

    return resourceI18n;
  }

  private languageIsValid(language: unknown): language is languageMapsType {
    return language === 'en' || language === 'pt-br';
  }

  translate(language: unknown, code: string, context?: contextType): string {
    if (!this.languageIsValid(language)) {
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
      message = message.replace(new RegExp(`\{\{${key}\}\}`, 'g'), context[key]?.toString() || '');
    });

    return message;
  }
}

export const i18nTranslate = new I18nTranslate();
