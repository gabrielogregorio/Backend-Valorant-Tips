import { Request, Response } from 'express';

export interface SuggestionControllerInterface {
  createSuggestion: (req: Request, res: Response) => Promise<Response>;
  getSuggestions: (_req: Request, res: Response) => Promise<Response>;
  editSuggestion: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}
