import { AgentsRepositoryInterface } from '@/domain/contexts/contexts/agents/repository';
import { AgentsValueObject } from '@/domain/contexts/contexts/agents/valueObject';
import { Agents } from './Agents';

export class AgentsRepository implements AgentsRepositoryInterface {
  save = async (mapEntity: AgentsValueObject): Promise<AgentsValueObject> => {
    const newMap = new Agents({
      image: mapEntity.image,
      name: mapEntity.name,
      id: mapEntity.id.getValue(),
    });

    await newMap.save();

    return AgentsValueObject.restore({
      image: newMap.image ?? '',
      name: newMap.name ?? '',
      id: newMap.id,
    });
  };

  findAll = async (): Promise<AgentsValueObject[]> => {
    const agents = await Agents.find();

    return agents.map((agent) =>
      AgentsValueObject.restore({ image: agent.image ?? '', name: agent.name ?? '', id: agent.id }),
    );
  };

  findByName = async (name: string): Promise<AgentsValueObject | null> => {
    const agent = await Agents.findOne({ name });
    if (!agent) {
      return null;
    }

    return AgentsValueObject.restore({
      id: agent.id,
      image: agent.image ?? '',
      name: agent.name ?? '',
    });
  };

  findByIds = async (ids: string[]): Promise<AgentsValueObject[]> => {
    const agents = await Agents.find({
      id: {
        $in: ids,
      },
    });

    return agents.map((agent) =>
      AgentsValueObject.restore({
        id: agent.id,
        image: agent.image ?? '',
        name: agent.name ?? '',
      }),
    );
  };
}