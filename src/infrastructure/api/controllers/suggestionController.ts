import { Request, Response } from 'express';
import { errorStates } from '@/infrastructure/api/errors/types';
import { statusCode } from '@/infrastructure/api/config/statusCode';
import { ApiError } from '../errors/ApiError';
import { IDatabaseSuggestion, IResponseSuggestion } from '../interfaces/suggestion';
import { SuggestionControllerInterface } from './interfaces/SuggestionControllerInterface';
import { CreateSuggestionUseCaseInterface } from '@/application/contexts/suggestions/useCases/create/createSuggestionUseCase';
import { FindAllSuggestionsUseCaseInterface } from '@/application/contexts/suggestions/useCases/findAll/FindAllSuggestionsUseCaseInterface';
import { UpdateSuggestionByIdUseCaseInterface } from '@/application/contexts/suggestions/useCases/updateById/UpdateSuggestionByIdUseCaseInterface';
import { DeleteSuggestionByIdUseCaseInterface } from '@/application/contexts/suggestions/useCases/deleteById/DeleteSuggestionByIdUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { schemaCreateSuggestion } from '@/infrastructure/api/schemas/createSuggestions.schema';
import { schemaEditSuggestion } from '@/infrastructure/api/schemas/updateSuggestion.schema';

export class SuggestionController implements SuggestionControllerInterface {
  constructor(
    private createSuggestionUseCase: CreateSuggestionUseCaseInterface,
    private findAllSuggestionsUseCase: FindAllSuggestionsUseCaseInterface,
    private updateSuggestionByIdUseCase: UpdateSuggestionByIdUseCaseInterface,
    private deleteSuggestionByIdUseCase: DeleteSuggestionByIdUseCaseInterface,
  ) {}

  private toHttp(suggestion: IDatabaseSuggestion): IResponseSuggestion {
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

    const suggestion = await this.createSuggestionUseCase.execute({
      postId,
      email,
      description,
    });

    return res.json(this.toHttp(suggestion));
  };

  getSuggestions = async (_req: Request, res: Response<IResponseSuggestion[]>): Promise<Response> => {
    const suggestions: IDatabaseSuggestion[] = await this.findAllSuggestionsUseCase.execute();
    const suggestionsFactory: IResponseSuggestion[] = [];
    suggestions.forEach((suggestion) => {
      suggestionsFactory.push(this.toHttp(suggestion));
    });

    return res.json(suggestionsFactory);
  };

  editSuggestion = async (req: Request, res: Response): Promise<Response> => {
    const dto = useValidation(req, schemaEditSuggestion);

    const suggestionId = dto.params.id;
    const newStatus = dto.body.status;

    const suggestionEdited = await this.updateSuggestionByIdUseCase.execute(suggestionId, newStatus);
    return res.json(this.toHttp(suggestionEdited));
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const suggestionId = req.params.id;

    const result = await this.deleteSuggestionByIdUseCase.execute(suggestionId);
    if (result === null) {
      throw new ApiError(errorStates.RESOURCE_NOT_EXISTS);
    }
    return res.sendStatus(statusCode.NO_CONTENT.code);
  };
}
