import { PostEntity } from '@/domain/post/entity/post';
import { PostRepositoryInterface } from '@/domain/post/repository/postRepository.interface';
import { UserRepositoryInterface } from '@/domain/user/repository/userRepository.interface';
import { UpdatePostUseCase } from '.';

const post = PostEntity.restore({ id: '123', userId: '456', description: 'new description', title: 'new title' });

const mockRepository = (): PostRepositoryInterface => ({
  update: jest.fn().mockReturnValue(Promise.resolve(post)),
  save: jest.fn(),
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

describe('UpdatePostUseCase', () => {
  it('should update a a post', async () => {
    const postRepository = mockRepository();
    const userRepository = mockUserRepository();
    const useCase = new UpdatePostUseCase(postRepository, userRepository);

    const result = await useCase.execute(post.id, {
      description: post.description,
      title: post.title,
    });
    expect(postRepository.update).toHaveBeenCalledTimes(1);

    expect(result).toEqual({
      description: 'new description',
      imgs: [],
      id: '123',
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
        username: '',
        image: '',
      },
    });
  });
});
