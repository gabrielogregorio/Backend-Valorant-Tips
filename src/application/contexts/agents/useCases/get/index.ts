import { AgentsRepositoryInterface } from '@/domain/contexts/contexts/agents/repository';
import { GetAgentsUseCaseInterface, GetAgentsOutputDtoInterface } from './GetAgentsUseCaseInterface';

export class GetAgentsUseCase implements GetAgentsUseCaseInterface {
  constructor(private _agentsRepository: AgentsRepositoryInterface) {}

  execute = async (): Promise<GetAgentsOutputDtoInterface[]> => {
    const agents = await this._agentsRepository.findAll();

    return agents.map((agent) => ({
      image: agent.image,
      id: agent.id.getValue(),
      name: agent.name,
    }));
  };
}
