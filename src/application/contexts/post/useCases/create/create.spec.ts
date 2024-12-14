import { PostEntity } from '@/domain/contexts/contexts/post/entity/post';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { CreatePostUseCase } from '.';

const post = PostEntity.restore({ id: '123', userId: '456', description: 'new description', title: 'new title' });

const mockRepository = (): PostRepositoryInterface => ({
  update: jest.fn(),
  save: jest.fn().mockReturnValue(Promise.resolve()),
  findById: jest.fn(),
  findAvailableMaps: jest.fn(),
  findAvailableAgents: jest.fn(),
  findAll: jest.fn(),
  findAllByMapAndAgent: jest.fn(),
  deleteById: jest.fn(),
  countAll: jest.fn(),
  findMaps: jest.fn(),
  findAgents: jest.fn(),
});

const mockUserRepository = (): UserRepositoryInterface => ({
  save: jest.fn(),
  update: jest.fn(),
  findById: jest.fn(),
  findByIds: jest.fn(),
  findOneByUsername: jest.fn(),
  findOneAndDelete: jest.fn(),
  countDocuments: jest.fn(),
});

describe('CreatePostUseCase', () => {
  it('should create a post', async () => {
    const postRepository = mockRepository();
    const userRepository = mockUserRepository();
    const useCase = new CreatePostUseCase(postRepository, userRepository);

    const result = await useCase.execute({
      description: post.description,
      title: post.title,
      imgs: [],
      tags: {
        ability: '',
        agent: '',
        difficult: '',
        map: '',
        mapPosition: '',
        moment: '',
        side: '',
      },
      userId: post.userId.getValue(),
    });
    expect(postRepository.save).toHaveBeenCalledTimes(1);

    expect(result).toEqual({
      description: 'new description',
      imgs: [],
      id: expect.anything(),
      tags: {
        ability: '',
        agent: '',
        difficult: '',
        map: '',
        mapPosition: '',
        moment: '',
        side: '',
      },
      title: 'new title',
      user: {
        image: '',
        username: '',
      },
    });
  });
});