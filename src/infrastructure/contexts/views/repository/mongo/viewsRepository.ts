/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewsRepositoryInterface } from '@/domain/contexts/contexts/views/repository';
import { ViewsValueObject } from '@/domain/contexts/contexts/views/valueObject';
import { View } from './View';

export class ViewsRepository implements ViewsRepositoryInterface {
  save = async (view: ViewsValueObject): Promise<ViewsValueObject> => {
    const newView = new View({
      dateAccess: view.dateAccess,
      ip: view.ip,
    });

    await newView.save();

    return ViewsValueObject.restore({
      dateAccess: newView.dateAccess as any,
      ip: newView.ip as any,
    });
  };

  findAll = async (): Promise<ViewsValueObject[]> => {
    const views = await View.find();

    // @ts-ignore
    return views.map((item) => ViewsValueObject.restore({ dateAccess: item.dateAccess, ip: item.ip }));
  };

  findAllDistinctIp = async (): Promise<string[]> => {
    const items = await View.find().distinct('ip');

    // @ts-ignore
    return items;
  };
}
