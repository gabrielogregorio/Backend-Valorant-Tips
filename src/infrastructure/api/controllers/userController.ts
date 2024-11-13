import { Request, Response } from 'express';
import { CreateUserBodyType } from '../schemas/createUser.schema';
import { statusCode } from '../config/statusCode';
import { UserControllerInterface } from './interfaces/UserControllerInterface';
import { CreateUserUseCaseInterface } from '@/useCase/contexts/user/create/CreateUserUseCaseInterface';
import { UpdateUserUseCaseInterface } from '@/useCase/contexts/user/update/UpdateUserUseCaseInterface';
import { FindUserByIdUseCaseInterface } from '@/useCase/contexts/user/findById/FindUserByIdUseCaseInterface';
import { DeleteUserByIdUseCaseInterface } from '@/useCase/contexts/user/deleteById/DeleteUserByIdUseCaseInterface';

export class UserController implements UserControllerInterface {
  constructor(
    private createUserUseCase: CreateUserUseCaseInterface,
    private updateUserUseCase: UpdateUserUseCaseInterface,
    private findUserByIdUseCase: FindUserByIdUseCaseInterface,
    private deleteUserByIdUseCase: DeleteUserByIdUseCaseInterface,
  ) {}

  uploadImage = async (req: Request, res: Response): Promise<Response> => {
    const filename = req.file?.filename;
    return res.json({ filename });
  };

  createUser = async (req: Request<undefined, undefined, CreateUserBodyType>, res: Response): Promise<Response> => {
    const { username, password, image, code } = req.body;

    await this.createUserUseCase.execute(code, {
      image,
      password,
      username,
    });

    return res.json({});
  };

  updateUser = async (req: Request, res: Response): Promise<Response> => {
    const { password } = req.body;
    const { username, image } = req.body;
    const { id } = req.data;

    await this.updateUserUseCase.execute(id, {
      image,
      password,
      username,
    });

    return res.json({});
  };

  get = async (req: Request, res: Response) => {
    const { id } = req.data;

    const userFounded = await this.findUserByIdUseCase.execute(id);

    return res.json(userFounded);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.data;

    await this.deleteUserByIdUseCase.execute(id);

    return res.sendStatus(statusCode.NO_CONTENT.code);
  };
}
