/* eslint-disable sonarjs/no-redundant-type-constituents */
/* eslint-disable sonarjs/no-nested-template-literals */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { DISABLE_LOGS } from '@/infrastructure/api/config/envs';
import { asyncLocalStorage } from '../container/globalState';

export const getActualMoment = (): string => {
  const date = new Date();

  return `${date.toISOString()}`;
};

export const getTraceId = () => {
  const storeData = asyncLocalStorage.getStore();

  if (!storeData?.traceId) {
    return '';
  }

  return `${String(storeData.traceId).padEnd(20).padStart(25)}`;
};

export const getUserId = () => {
  const oldStore = asyncLocalStorage.getStore();

  if (!oldStore?.userId) {
    return;
  }
  return oldStore.userId;
};

export type LevelsType = 'ERROR' | 'INFO' | 'WARN' | 'DEBUG';

export const formatStartMessage = (level: string) => `${getActualMoment()} ${`[${level}]`.padEnd(8, ' ')}`;

export class Log {
  public static info(message: string, context?: any): void {
    this._showLogs('info', message, context);
  }

  public static error(message: string, context?: any): void {
    this._showLogs('error', message, context);
  }

  public static debug(message: string, context?: any): void {
    this._showLogs('debug', message, context);
  }

  public static warning(message: string, context?: any): void {
    this._showLogs('warn', message, context);
  }

  private static _showLogs(
    level: 'warn' | 'debug' | 'error' | 'info',
    message: string,
    contextFinal: any | any[] = {},
  ) {
    if (DISABLE_LOGS) {
      return;
    }

    const traceId = getTraceId();
    const userId = getUserId();

    const item = Boolean(contextFinal);
    const messageContext = item ? 'context:' : '';
    const context = contextFinal || undefined;

    console[level](
      formatStartMessage(level.toUpperCase()),
      message,
      messageContext,
      JSON.stringify({
        context,
        ...(userId ? { userId } : {}),
        ...(traceId ? { traceId } : {}),
      }),
    );
  }
}
