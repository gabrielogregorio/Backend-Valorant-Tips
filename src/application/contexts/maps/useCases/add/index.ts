import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { DomainError } from '@/domain/contexts/errors';
import { CreateMapUseCaseInterface } from './CreateMapUseCaseInterface';

export class CreateMapUseCase implements CreateMapUseCaseInterface {
  constructor(private _mapRepository: MapsRepositoryInterface) {}

  execute = async (
    name: string,
    imageUrl: string,
  ): Promise<{
    id: string;
    name: string;
    imageUrl: string;
  }> => {
    if (await this._mapRepository.findByName(name)) {
      throw new DomainError('AlreadyExists', `map name '${name}' already exists`, {
        name,
      });
    }
    const maps = MapsValueObject.create({
      imageUrl,
      name,
    });

    const mapCreated = await this._mapRepository.save(maps);
    return {
      id: mapCreated.id.getValue(),
      imageUrl: mapCreated.imageUrl,
      name: mapCreated.name,
    };
  };
}
