import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { Maps } from './Maps';

export class MapsRepository implements MapsRepositoryInterface {
  save = async (mapEntity: MapsValueObject): Promise<MapsValueObject> => {
    const newMap = new Maps({
      image: mapEntity.image,
      name: mapEntity.name,
      id: mapEntity.id.getValue(),
    });

    await newMap.save();

    return MapsValueObject.restore({
      image: newMap.image ?? '',
      name: newMap.name ?? '',
      id: newMap.id,
    });
  };

  findAll = async (): Promise<MapsValueObject[]> => {
    const maps = await Maps.find();

    return maps.map((map) => MapsValueObject.restore({ image: map.image ?? '', name: map.name ?? '', id: map.id }));
  };

  findByName = async (name: string): Promise<MapsValueObject | null> => {
    const map = await Maps.findOne({ name });
    if (!map) {
      return null;
    }

    return MapsValueObject.restore({
      id: map.id,
      image: map.image ?? '',
      name: map.name ?? '',
    });
  };
}
