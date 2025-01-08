import { Request, Response } from 'express';
import { PostTagCategoryControllerInterface } from '@/infrastructure/api/controllers/interfaces/PostTagCategoryControllerInterface';
import { CreatePostTagCategoryUseCaseInterface } from '@/application/contexts/postTagCategory/useCases/add/CreatePostTagCategoryUseCaseInterface';
import { GetPostTagCategoryUseCaseInterface } from '@/application/contexts/postTagCategory/useCases/get/GetPostTagCategoryUseCaseInterface';

export class PostTagCategoryController implements PostTagCategoryControllerInterface {
  constructor(
    private _createPostTagCategoryUseCase: CreatePostTagCategoryUseCaseInterface,
    private _getPostTagCategoryUseCase: GetPostTagCategoryUseCaseInterface,
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const agent = await this._createPostTagCategoryUseCase.execute(req.body.name);

    return res.json({
      id: agent.id,
      name: agent.name,
    });
  };

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const agents = await this._getPostTagCategoryUseCase.execute();

    return res.json(
      agents.map((map) => ({
        id: map.id,
        name: map.name,
      })),
    );
  };
}
