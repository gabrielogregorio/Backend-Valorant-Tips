import { ViewsRepositoryInterface } from '@/domain/views/repository/interface';
import { ViewsEntity } from '@/domain/views/entity';
import { View } from './View';

export class ViewsRepository implements ViewsRepositoryInterface {
  save = async (view: ViewsEntity): Promise<ViewsEntity> => {
    const newView = new View({
      dateAccess: view.dateAccess,
      ip: view.ip,
    });

    await newView.save();

    return ViewsEntity.restore({
      dateAccess: newView.dateAccess,
      ip: newView.ip,
    });
  };

  findAll = async (): Promise<ViewsEntity[]> => {
    const views = await View.find();

    return views.map((item) => ViewsEntity.restore({ dateAccess: item.dateAccess, ip: item.ip }));
  };

  findAllDistinctIp = async (): Promise<string[]> => {
    const ips = await View.find().distinct('ip');

    return ips;
  };
}
