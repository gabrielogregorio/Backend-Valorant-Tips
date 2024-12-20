import { AgentsRepositoryInterface } from '@/domain/contexts/contexts/agents/repository';
import { AgentsValueObject } from '@/domain/contexts/contexts/agents/valueObject';
import { DomainError } from '@/domain/contexts/errors';
import { CreateAgentUseCaseInterface } from './CreateAgentUseCaseInterface';

export class CreateAgentUseCase implements CreateAgentUseCaseInterface {
  constructor(private _agentRepository: AgentsRepositoryInterface) {}

  execute = async (
    name: string,
    image: string,
  ): Promise<{
    id: string;
    name: string;
    image: string;
  }> => {
    if (await this._agentRepository.findByName(name)) {
      throw new DomainError('AlreadyExists', `agent name '${name}' already exists`, {
        name,
      });
    }

    const agent = AgentsValueObject.create({
      image,
      name,
    });

    const agentCreated = await this._agentRepository.save(agent);
    return {
      id: agentCreated.id.getValue(),
      image: agentCreated.image,
      name: agentCreated.name,
    };
  };
}
