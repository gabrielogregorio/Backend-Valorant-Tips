import { SuggestionEntityInterface } from '@/domain/contexts/contexts/suggestion/entity/interfaces';
import { Suggestion } from './Suggestion';
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { SuggestionEntity } from '@/domain/contexts/contexts/suggestion/entity';

export class SuggestionRepository implements SuggestionRepositoryInterface {
  save = async (suggestion: SuggestionEntityInterface): Promise<SuggestionEntityInterface> => {
    const newSuggestion = new Suggestion({
      description: suggestion.description,
      email: suggestion.email,
      id: suggestion.id.getValue(),
      createdAt: suggestion.createdAt,
      postId: suggestion.postId.getValue(),
      status: suggestion.status,
      updatedAt: suggestion.updatedAt,
    });

    await newSuggestion.save();

    return suggestion;
  };

  findById = async (id: string): Promise<SuggestionEntityInterface> => {
    const suggestion = await Suggestion.findOne({ id });
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    return SuggestionEntity.restore({
      description: suggestion.description,
      email: suggestion.email,
      postId: suggestion.postId.toString(),
      createdAt: suggestion.createdAt,
      id: suggestion.id,
      status: suggestion.status,
      updatedAt: suggestion.updatedAt,
    });
  };

  findAll = async (): Promise<SuggestionEntityInterface[]> => {
    const suggestions = await Suggestion.find();

    return suggestions.map((suggestion) =>
      SuggestionEntity.restore({
        description: suggestion.description,
        email: suggestion.email,
        postId: suggestion.postId,
        createdAt: suggestion.createdAt,
        id: suggestion.id,
        status: suggestion.status,
        updatedAt: suggestion.updatedAt,
      }),
    );
  };

  updateById = async (
    id: string,
    status: SuggestionEntityInterface['status'],
  ): Promise<SuggestionEntityInterface | null> =>
    Suggestion.findOneAndUpdate({ id }, { $set: { status } }, { new: true });

  deleteById = async (id: string): Promise<void | null> => Suggestion.findOneAndDelete({ id });

  count = async (): Promise<number> => Suggestion.countDocuments({});
}
