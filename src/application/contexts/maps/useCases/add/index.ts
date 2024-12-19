import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { DomainError } from '@/domain/contexts/errors';
import { CreateMapUseCaseInterface } from './CreateMapUseCaseInterface';

export class CreateMapUseCase implements CreateMapUseCaseInterface {
  constructor(private _mapRepository: MapsRepositoryInterface) {}

  execute = async (
    name: string,
    image: string,
  ): Promise<{
    id: string;
    name: string;
    image: string;
  }> => {
    if (await this._mapRepository.findByName(name)) {
      throw new DomainError('AlreadyExists', `map name '${name}' already exists`, {
        name,
      });
    }

    const maps = MapsValueObject.create({
      image,
      name,
    });

    const mapCreated = await this._mapRepository.save(maps);
    return {
      id: mapCreated.id.getValue(),
      image: mapCreated.image,
      name: mapCreated.name,
    };
  };
}
