/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sonarjs/different-types-comparison */
import { Request, Response } from 'express';
import { errorStates } from '@/infrastructure/api/errors/types';
import { statusCode } from '@/infrastructure/api/config/statusCode';
import { CreateSuggestionUseCaseInterface } from '@/application/contexts/suggestions/useCases/create/createSuggestionUseCase';
import { FindAllSuggestionsUseCaseInterface } from '@/application/contexts/suggestions/useCases/findAll/FindAllSuggestionsUseCaseInterface';
import { UpdateSuggestionByIdUseCaseInterface } from '@/application/contexts/suggestions/useCases/updateById/UpdateSuggestionByIdUseCaseInterface';
import { DeleteSuggestionByIdUseCaseInterface } from '@/application/contexts/suggestions/useCases/deleteById/DeleteSuggestionByIdUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { schemaCreateSuggestion } from '@/infrastructure/api/schemas/createSuggestions.schema';
import { schemaEditSuggestion } from '@/infrastructure/api/schemas/updateSuggestion.schema';
import { SuggestionControllerInterface } from './interfaces/SuggestionControllerInterface';
// import { IDatabaseSuggestion, any } from '../interfaces/suggestion';
import { ApiError } from '../errors/ApiError';

export class SuggestionController implements SuggestionControllerInterface {
  constructor(
    private _createSuggestionUseCase: CreateSuggestionUseCaseInterface,
    private _findAllSuggestionsUseCase: FindAllSuggestionsUseCaseInterface,
    private _updateSuggestionByIdUseCase: UpdateSuggestionByIdUseCaseInterface,
    private _deleteSuggestionByIdUseCase: DeleteSuggestionByIdUseCaseInterface,
  ) {}

  // migrar para presentation
  private _toHttp(suggestion: any): any {
    return {
      description: suggestion?.description,
      email: suggestion?.email,
      postId: suggestion.postId.toString(),
      id: suggestion?.id?.toString(),
      status: suggestion.status,
      createdAt: suggestion.createdAt,
      updatedAt: suggestion.updatedAt,
    };
  }

  createSuggestion = async (req: Request, res: Response) => {
    const dto = useValidation(req, schemaCreateSuggestion);

    const { postId, email, description } = dto.body;

    const suggestion = await this._createSuggestionUseCase.execute({
      postId,
      email,
      description,
    });

    return res.json(this._toHttp(suggestion));
  };

  getSuggestions = async (_req: Request, res: Response<any[]>): Promise<Response> => {
    const suggestions: any[] = await this._findAllSuggestionsUseCase.execute();
    const suggestionsFactory: any[] = [];
    suggestions.forEach((suggestion) => {
      suggestionsFactory.push(this._toHttp(suggestion));
    });

    return res.json(suggestionsFactory);
  };

  editSuggestion = async (req: Request, res: Response): Promise<Response> => {
    const dto = useValidation(req, schemaEditSuggestion);

    const suggestionId = dto.params.id;
    const newStatus = dto.body.status;

    const suggestionEdited = await this._updateSuggestionByIdUseCase.execute(suggestionId, newStatus);
    return res.json(this._toHttp(suggestionEdited));
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const suggestionId = req.params.id;

    const result = await this._deleteSuggestionByIdUseCase.execute(suggestionId);
    // @ts-ignore
    if (result === null) {
      // bug
      throw new ApiError(errorStates.RESOURCE_NOT_EXISTS);
    }
    return res.sendStatus(statusCode.NO_CONTENT.code);
  };
}
