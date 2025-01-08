import { Request, Response } from 'express';
import { PostTagsControllerInterface } from '@/infrastructure/api/controllers/interfaces/PostTagsControllerInterface';
import { CreatePostTagsUseCaseInterface } from '@/application/contexts/postTags/useCases/add/CreatePostTagsUseCaseInterface';
import { GetPostTagsUseCaseInterface } from '@/application/contexts/postTags/useCases/get/GetPostTagsUseCaseInterface';

export class PostTagsController implements PostTagsControllerInterface {
  constructor(
    private _createPostTagsUseCase: CreatePostTagsUseCaseInterface,
    private _getPostTagsUseCase: GetPostTagsUseCaseInterface,
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const postTag = await this._createPostTagsUseCase.execute(req.body.name, req.body.categoryId);

    return res.json({
      id: postTag.id,
      name: postTag.name,
      categoryId: postTag.categoryId,
    });
  };

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const postTags = await this._getPostTagsUseCase.execute();

    return res.json(
      postTags.map((postTag) => ({
        id: postTag.id,
        name: postTag.name,
        categoryId: postTag.categoryId,
      })),
    );
  };
}
