import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { GetMapsUseCaseInterface, GetMapsOutputDtoInterface } from './GetMapsUseCaseInterface';

export class GetMapsUseCase implements GetMapsUseCaseInterface {
  constructor(private _mapsRepository: MapsRepositoryInterface) {}

  execute = async (): Promise<GetMapsOutputDtoInterface[]> => {
    const maps = await this._mapsRepository.findAll();

    return maps.map((map) => ({
      image: map.image,
      id: map.id.getValue(),
      name: map.name,
    }));
  };
}
