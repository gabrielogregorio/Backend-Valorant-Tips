import { Request, Response } from 'express';
import { CreateUserUseCaseInterface } from '@/application/contexts/user/useCases/create/CreateUserUseCaseInterface';
import { UpdateUserUseCaseInterface } from '@/application/contexts/user/useCases/update/UpdateUserUseCaseInterface';
import { FindUserByIdUseCaseInterface } from '@/application/contexts/user/useCases/findById/FindUserByIdUseCaseInterface';
import { DeleteUserByIdUseCaseInterface } from '@/application/contexts/user/useCases/deleteById/DeleteUserByIdUseCaseInterface';
import { useValidation } from '@/infrastructure/api/middlewares/useValidation';
import { schemaUpdateUser } from '@/infrastructure/api/schemas/updateUser.schema';
import { UserControllerInterface } from './interfaces/UserControllerInterface';
import { statusCode } from '../config/statusCode';
import { schemaCreateUser } from '../schemas/createUser.schema';

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
    const { userId } = req.data;

    await this.updateUserUseCase.execute(userId, {
      image,
      password,
      username,
    });

    return res.json({});
  };

  get = async (req: Request, res: Response) => {
    const { userId } = req.data;

    console.log(req.data);
    const userFounded = await this.findUserByIdUseCase.execute(userId);

    return res.json(userFounded);
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    const { userId } = req.data;

    await this.deleteUserByIdUseCase.execute(userId);

    return res.sendStatus(statusCode.NO_CONTENT.code);
  };
}
