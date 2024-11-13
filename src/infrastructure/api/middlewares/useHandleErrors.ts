import { NextFunction, Request, Response } from 'express';

import { Log } from '../logs';
import { statusCode } from '../config/statusCode';
import { ApiError } from '../errors/ApiError';
import { AppError } from '../../../application/errors/AppError';
import { i18nTranslate } from '@/infrastructure/config/i18nTranslate';
import { DomainError } from '@/domain/contexts/errors';

const toObject = (object: unknown) => {
  if (typeof object === 'string') {
    return object;
  }

  return JSON.stringify(object);
};

function getLocationError(error: Error): string {
  try {
    const stackLines = error?.stack?.split?.('\n') || [];
    return stackLines[1]?.trim()?.replace('at ', '') || '';
  } catch (err) {
    console.log('Error not has stack lines', err);
    return '';
  }
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const useHandleErrors = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ApiError) {
    const file = getLocationError(error);
    const contextLog = Object.keys(error.context || {}).length ? ` | Context: ${toObject(error.context)}` : '';
    const fileLog = file ? ` | File: ${getLocationError(error)}` : '';

    Log.warning(`ApiError: ${error?.error.code} ${error?.error.name}${contextLog}${fileLog}`);
    res.status(error?.error.code).json({ message: error.error.message });
    return;
  }

  if (error instanceof DomainError) {
    const details = error.details ? `details: ${JSON.stringify(error.details).trim()}` : '';

    Log.error(`DomainError: ${error.message} ${details} shortStack: ${error.shortStack}`);
    return res.status(409).send({ error: error.message });
  }

  if (error instanceof AppError) {
    const language = req.headers['accept-language'] || 'en';
    const file = getLocationError(error);
    const message = i18nTranslate.translate(language, error.code, error.context);

    const contextLog = Object.keys(error.context || {}).length ? ` | Context: ${toObject(error.context)}` : '';
    const fileLog = file ? ` | File: ${getLocationError(error)}` : '';

    Log.error(`AppError: ${error?.code}${contextLog}${fileLog}`);
    res.status(409).json({ error: error.code, message });
    return;
  }

  if (error instanceof Error) {
    Log.error(`Error: ${error.name} ${error.message} | File: ${getLocationError(error)}`);
    Log.error(error?.stack);
    res.status(statusCode.ERROR_IN_SERVER.code).json({ message: 'Internal Error' });
    return;
  }

  Log.error('Internal Unknown Server Error', error);
  res.status(statusCode.ERROR_IN_SERVER.code).json({ message: 'Internal Error' });
};
