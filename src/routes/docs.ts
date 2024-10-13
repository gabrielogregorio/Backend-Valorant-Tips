import express, { Router, Request, Response } from 'express';
import docbytest from 'docbytest';
import statusCode from '@/config/statusCode';
import path from 'path';

import fs from 'fs';
import { Log } from '@/logs/index';

let docRouter = {};
docbytest(statusCode)
  .then((res) => {
    docRouter = res;
    fs.writeFileSync('./docs.json', JSON.stringify(docRouter, undefined, 2));
  })
  .catch((error) => {
    Log.error('erro ao carregar documentação', error);
  });

export const docsRouter: Router = express.Router();

docsRouter.use('/docs/', express.static(path.join(__dirname, '../../node_modules/docbytest-ui/build/')));

docsRouter.get('/docs-json', async (_req: Request, res: Response) => res.json(docRouter));
