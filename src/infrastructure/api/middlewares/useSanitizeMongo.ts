import mongoSanitize from 'express-mongo-sanitize';
import { Request } from 'express';
import { Log } from '../logs';

export const useSanitizeMongo = mongoSanitize({
  onSanitize: ({ req, key }) => {
    const sanitizedContent = JSON.stringify(req?.[key as keyof Request]);
    Log.warning(`useSanitizeMongo: ${req.method} ${req.url} from ${req.ip} had [${key}] sanitized ${sanitizedContent}`);
  },
});
