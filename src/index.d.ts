/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable sonarjs/unused-import */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import express from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    data: {
      userId: string;
      file: string;
    };
  }
}
