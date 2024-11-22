import { Request, Response } from 'express';
import { schemaCreateUser } from '../schemas/createUser.schema';
import { statusCode } from '../config/statusCode';
import { UserControllerInterface } from './interfaces/UserControllerInterface';
import { CreateUserUseCaseInterface } from '@/application/contexts/user/useCases/create/CreateUserUseCaseInterface';
import { UpdateUserUseCaseInterface } from '@/application/contexts/user/useCases/update/UpdateUserUseCaseInterface';
import { FindUserByIdUseCaseInterface } from '@/application/contexts/user/useCases/findById/FindUserByIdUseCaseInterface';
import { DeleteUserByIdUseCaseInterface } from '@/application/contexts/user/useCases/deleteById/DeleteUserByIdUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { schemaUpdateUser } from '@/infrastructure/api/schemas/updateUser.schema';

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

  createUser = async (req: Request, res: Response): Promise<Response> => {
    const data = useValidation(req, schemaCreateUser);

    const { username, password, image, code } = data.body;

    await this.createUserUseCase.execute(code, {
      image,
      password,
      username,
    });

    return res.json({});
  };

  updateUser = async (req: Request, res: Response): Promise<Response> => {
    const content = useValidation(req, schemaUpdateUser);

    const { password, username, image } = content.body;
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
