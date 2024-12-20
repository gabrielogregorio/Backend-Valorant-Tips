import { PostTagsRepositoryInterface } from '@/domain/contexts/contexts/postTags/repository';
import { PostTagsValueObject } from '@/domain/contexts/contexts/postTags/valueObject';
import { PostTags } from './PostTags';

export class PostTagsRepository implements PostTagsRepositoryInterface {
  save = async (entity: PostTagsValueObject): Promise<PostTagsValueObject> => {
    const postTags = new PostTags({
      name: entity.name,
      categoryId: entity.categoryId.getValue(),
      id: entity.id.getValue(),
    });

    await postTags.save();

    return PostTagsValueObject.restore({
      name: postTags.name ?? '',
      categoryId: postTags.categoryId ?? '',
      id: postTags.id,
    });
  };

  findAll = async (): Promise<PostTagsValueObject[]> => {
    const postTags = await PostTags.find();

    return postTags.map((agent) =>
      PostTagsValueObject.restore({
        name: agent.name ?? '',
        categoryId: agent.categoryId ?? '',
        id: agent.id,
      }),
    );
  };

  findByIds = async (ids: string[]): Promise<PostTagsValueObject[]> => {
    const postTags = await PostTags.find({
      id: {
        $in: ids,
      },
    });

    return postTags.map((postTag) =>
      PostTagsValueObject.restore({
        id: postTag.id,
        categoryId: postTag.categoryId ?? '',
        name: postTag.name ?? '',
      }),
    );
  };

  findByName = async (name: string): Promise<PostTagsValueObject | null> => {
    const postTags = await PostTags.findOne({
      name,
    });

    if (!postTags) {
      return null;
    }

    return PostTagsValueObject.restore({
      id: postTags.id ?? '',
      categoryId: postTags.categoryId ?? '',
      name: postTags.name ?? '',
    });
  };
}
