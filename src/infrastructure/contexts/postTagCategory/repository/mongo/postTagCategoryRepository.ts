import { PostTagCategoryRepositoryInterface } from '@/domain/contexts/contexts/postTagCategory/repository';
import { PostTagCategoryValueObject } from '@/domain/contexts/contexts/postTagCategory/valueObject';
import { PostTagCategory } from './PostTagCategory';

export class PostTagCategoryRepository implements PostTagCategoryRepositoryInterface {
  save = async (entity: PostTagCategoryValueObject): Promise<PostTagCategoryValueObject> => {
    const newMap = new PostTagCategory({
      name: entity.name,
      id: entity.id.getValue(),
    });

    await newMap.save();

    return PostTagCategoryValueObject.restore({
      name: newMap.name ?? '',
      id: newMap.id,
    });
  };

  findAll = async (): Promise<PostTagCategoryValueObject[]> => {
    const postTagCategories = await PostTagCategory.find();

    return postTagCategories.map((agent) =>
      PostTagCategoryValueObject.restore({ name: agent.name ?? '', id: agent.id }),
    );
  };

  findByIds = async (ids: string[]): Promise<PostTagCategoryValueObject[]> => {
    const postTagCategories = await PostTagCategory.find({
      id: {
        $in: ids,
      },
    });

    return postTagCategories.map((agent) =>
      PostTagCategoryValueObject.restore({
        id: agent.id,
        name: agent.name ?? '',
      }),
    );
  };

  findByName = async (name: string): Promise<PostTagCategoryValueObject | null> => {
    const postTagCategory = await PostTagCategory.findOne({
      name,
    });

    if (!postTagCategory) {
      return null;
    }

    return PostTagCategoryValueObject.restore({
      id: postTagCategory.id ?? '',
      name: postTagCategory.name ?? '',
    });
  };
}
