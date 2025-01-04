import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { MapsValueObject } from '@/domain/contexts/contexts/maps/valueObject';
import { Maps } from './Maps';

export class MapsRepository implements MapsRepositoryInterface {
  save = async (mapEntity: MapsValueObject): Promise<MapsValueObject> => {
    const newMap = new Maps({
      imageUrl: mapEntity.imageUrl,
      name: mapEntity.name,
      id: mapEntity.id.getValue(),
    });

    await newMap.save();

    return MapsValueObject.restore({
      imageUrl: newMap.imageUrl ?? '',
      name: newMap.name ?? '',
      id: newMap.id,
    });
  };

  findAll = async (): Promise<MapsValueObject[]> => {
    const maps = await Maps.find();

    return maps.map((map) =>
      MapsValueObject.restore({ imageUrl: map.imageUrl ?? '', name: map.name ?? '', id: map.id }),
    );
  };

  findByName = async (name: string): Promise<MapsValueObject | null> => {
    const map = await Maps.findOne({ name });
    if (!map) {
      return null;
    }

    return MapsValueObject.restore({
      id: map.id,
      imageUrl: map.imageUrl ?? '',
      name: map.name ?? '',
    });
  };

  findById = async (id: string): Promise<MapsValueObject | null> => {
    const map = await Maps.findOne({ id });
    if (!map) {
      return null;
    }

    return MapsValueObject.restore({
      id: map.id,
      imageUrl: map.imageUrl ?? '',
      name: map.name ?? '',
    });
  };

  findByIds = async (ids: string[]): Promise<MapsValueObject[]> => {
    const maps = await Maps.find({
      id: {
        $in: ids,
      },
    });

    return maps.map((map) =>
      MapsValueObject.restore({
        id: map.id,
        imageUrl: map.imageUrl ?? '',
        name: map.name ?? '',
      }),
    );
  };
}
