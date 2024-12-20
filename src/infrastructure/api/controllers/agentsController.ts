import { Request, Response } from 'express';
import { GetAgentsUseCaseInterface } from '@/application/contexts/agents/useCases/get/GetAgentsUseCaseInterface';
import { CreateAgentUseCaseInterface } from '@/application/contexts/agents/useCases/add/CreateAgentUseCaseInterface';
import { AgentsControllerInterface } from '@/infrastructure/api/controllers/interfaces/AgentsControllerInterface';

export class AgentsController implements AgentsControllerInterface {
  constructor(
    private _createAgentsUseCase: CreateAgentUseCaseInterface,
    private _getAgentsUseCase: GetAgentsUseCaseInterface,
  ) {}

  create = async (req: Request, res: Response): Promise<Response> => {
    const agent = await this._createAgentsUseCase.execute(req.body.name, req.body.image);

    return res.json({
      id: agent.id,
      name: agent.name,
      image: agent.image,
    });
  };

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const agents = await this._getAgentsUseCase.execute();

    return res.json(
      agents.map((map) => ({
        id: map.id,
        name: map.name,
        image: map.image,
      })),
    );
  };
}
