import { DISABLE_LOGS } from '@/infrastructure/api/config/envs';
import { asyncLocalStorage } from '../container/globalState';
import { contextType } from '@/infrastructure/api/logs/types';

export const getActualMoment = (): string => {
  const date = new Date();

  return `${date.toISOString()}`;
};

export const getTraceId = () => {
  const storeData = asyncLocalStorage.getStore();

  if (!storeData || !storeData.traceId) {
    return '';
  }

  return `${String(storeData.traceId).padEnd(20).padStart(25)}`;
};

export const getUserId = () => {
  const oldStore = asyncLocalStorage.getStore();

  if (!oldStore || !oldStore.userId) {
    return;
  }
  return oldStore.userId;
};

export type levelsType = 'ERROR' | 'INFO' | 'WARN' | 'DEBUG';

export const formatStartMessage = (level: string) => {
  return `${getActualMoment()} ` + `[${level}]`.padEnd(8, ' ');
};

export class Log {
  public static info(message: string, context?: contextType): void {
    this.showLogs('info', message, context);
  }

  public static error(message: string, context?: contextType): void {
    this.showLogs('error', message, context);
  }

  public static debug(message: string, context?: contextType): void {
    this.showLogs('debug', message, context);
  }

  public static warning(message: string, context?: contextType): void {
    this.showLogs('warn', message, context);
  }

  private static showLogs(level: 'warn' | 'debug' | 'error' | 'info', message: string, context: contextType = {}) {
    if (DISABLE_LOGS) {
      return;
    }

    const traceId = getTraceId();
    const userId = getUserId();

    console[level](
      formatStartMessage(level.toUpperCase()),
      message,
      'context:',
      JSON.stringify({
        ...context,
        ...(userId ? { userId } : {}),
        ...(traceId ? { traceId } : {}),
      }),
    );
  }
}
