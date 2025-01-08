import morgan from 'morgan';
import { DISABLE_LOGS } from '@/infrastructure/api/config/envs';
import { formatStartMessage, getTraceId, getUserId, LevelsType } from '../logs';

const getLevelErrorByStatusCode = (status: string): LevelsType => {
  if (status.startsWith('2') || status.startsWith('3')) {
    return 'INFO';
  }

  return 'ERROR';
};

export const useLogger = morgan((tokens, req, res) => {
  if (DISABLE_LOGS) {
    return undefined;
  }

  const status = tokens.status(req, res);

  const base = formatStartMessage(getLevelErrorByStatusCode(String(status)));
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);

  const ip = req?.socket?.remoteAddress;
  const contentLength = tokens.res(req, res, 'content-length');
  const responseTime = tokens['response-time'](req, res);
  const traceId = getTraceId();
  const userId = getUserId();
  return [
    base,
    'HttpRequest:',
    method,
    url,
    status,
    `context: ${JSON.stringify({
      contentLength,
      responseTime,
      ip,
      userId,
      traceId,
    })}`,
  ].join(' ');
});
