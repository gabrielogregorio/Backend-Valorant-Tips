import { Request, Response } from 'express';
import { SuggestionService } from '@/service/suggestion';
import { DataSuggestion, factorySuggestionType } from '@/factories/dataSuggestion';
import { ISuggestionMongo } from '@/interfaces/suggestion';
import { CreateSuggestionBodyType } from '@/schemas/createSuggestions';
import { AppError } from '@/errors/index';
import { errorStates } from '@/errors/types';
import statusCode from '@/config/statusCode';
import mongoose from 'mongoose';

export class SuggestionController {
  private suggestionService: SuggestionService;

  constructor(suggestionService: SuggestionService) {
    this.suggestionService = suggestionService;
  }

  createSuggestion = async (req: Request<undefined, undefined, CreateSuggestionBodyType>, res: Response) => {
    const { post_id, email, description } = req.body;

    const postId = post_id as unknown as mongoose.Types.ObjectId;

    const suggestion = await this.suggestionService.create({
      post_id: postId,
      email,
      description,
      status: 'waiting',
    });

    return res.json(suggestion);
  };

  getSuggestions = async (_req: Request, res: Response): Promise<Response> => {
    const suggestions: ISuggestionMongo[] = await this.suggestionService.FindAll();

    const suggestionsFactory: factorySuggestionType[] = [];
    suggestions.forEach((suggestion) => {
      suggestionsFactory.push(DataSuggestion.Build(suggestion));
    });

    return res.json(suggestionsFactory);
  };

  // added middleware in params
  editSuggestion = async (req: Request, res: Response): Promise<Response> => {
    const suggestionId = req.params.id;
    const newStatus = req.body.status;

    const suggestionEdited = await this.suggestionService.UpdateById(suggestionId, newStatus);
    return res.json(suggestionEdited);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const suggestionId = req.params.id;

    const result = await this.suggestionService.deleteById(suggestionId);
    if (result === null) {
      throw new AppError(errorStates.RESOURCE_NOT_EXISTS);
    }
    return res.sendStatus(statusCode.NO_CONTENT.code);
  };
}
