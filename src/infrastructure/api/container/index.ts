import { HandleAuthTokenInterface } from '@/application/services/HandleAuthToken';
import { CodeRepositoryInterface } from '@/domain/contexts/contexts/code/repository';
import { PostRepositoryInterface } from '@/domain/contexts/contexts/post/repository';
import { SuggestionRepositoryInterface } from '@/domain/contexts/contexts/suggestion/repository';
import { UserRepositoryInterface } from '@/domain/contexts/contexts/user/repository';
import { ViewsRepositoryInterface } from '@/domain/contexts/contexts/views/repository';
import { PasswordHasherInterface } from '@/domain/contexts/services/PasswordHasherInterface';
import { AuthController } from '@/infrastructure/api/controllers/authController';
import { CodeController } from '@/infrastructure/api/controllers/codeController';
import { DashboardController } from '@/infrastructure/api/controllers/dashboardController';
import { AuthControllerInterface } from '@/infrastructure/api/controllers/interfaces/AuthControllerInterface';
import { CodeControllerInterface } from '@/infrastructure/api/controllers/interfaces/CodeControllerInterface';
import { DashboardControllerInterface } from '@/infrastructure/api/controllers/interfaces/DashboardControllerInterface';
import { PostControllerInterface } from '@/infrastructure/api/controllers/interfaces/PostControllerInterface';
import { SuggestionControllerInterface } from '@/infrastructure/api/controllers/interfaces/SuggestionControllerInterface';
import { UserControllerInterface } from '@/infrastructure/api/controllers/interfaces/UserControllerInterface';
import { ViewsControllerInterface } from '@/infrastructure/api/controllers/interfaces/ViewsControllerInterface';
import { PostController } from '@/infrastructure/api/controllers/postController';
import { SuggestionController } from '@/infrastructure/api/controllers/suggestionController';
import { UserController } from '@/infrastructure/api/controllers/userController';
import { ViewsController } from '@/infrastructure/api/controllers/viewsController';
import { CodeRepository } from '@/infrastructure/contexts/code/repository/mongo/codeRepository';
import { PostRepository } from '@/infrastructure/contexts/post/repository/mongo/postRepository';
import { SuggestionRepository } from '@/infrastructure/contexts/suggestion/repository/mongo/suggestionRepository';
import { UserRepository } from '@/infrastructure/contexts/user/repository/mongo/userRepository';
import { ViewsRepository } from '@/infrastructure/contexts/views/repository/mongo/viewsRepository';
import { HandleAuthToken } from '@/infrastructure/services/HandleAuthToken';
import { PasswordHasher } from '@/infrastructure/services/PasswordHasher';
import { LoginUseCase } from '@/application/contexts/auth/useCases/login';
import { LoginUseCaseInterface } from '@/application/contexts/auth/useCases/login/LoginUseCaseInterface';
import { CreateCodeUseCase } from '@/application/contexts/code/useCases/create';
import { CreateCodeUseCaseInterface } from '@/application/contexts/code/useCases/create/CreateCodeUseCaseInterface';
import { DashboardUseCase } from '@/application/contexts/dashboard/useCases/get';
import { DashboardUseCaseInterface } from '@/application/contexts/dashboard/useCases/get/DashboardUseCaseInterface';
import { CreatePostUseCase } from '@/application/contexts/post/useCases/create';
import { CreatePostUseCaseInterface } from '@/application/contexts/post/useCases/create/CreatePostUseCaseInterface';
import { DeletePostUseCase } from '@/application/contexts/post/useCases/deleteById';
import { DeletePostUseCaseInterface } from '@/application/contexts/post/useCases/deleteById/DeletePostUseCaseInterface';
import { FindAllPostUseCase } from '@/application/contexts/post/useCases/findAll';
import { FindAllPostUseCaseInterface } from '@/application/contexts/post/useCases/findAll/FindAllPostUseCaseInterface';
import { FindAllByMapAndAgentUseCase } from '@/application/contexts/post/useCases/findAllByMapAndAgent';
import { FindAllByMapAndAgentUseCaseInterface } from '@/application/contexts/post/useCases/findAllByMapAndAgent/FindAllByMapAndAgentUseCaseInterface';
import { FindAvailableAgentsUseCase } from '@/application/contexts/post/useCases/findAvailableAgents';
import { FindAvailableAgentsUseCaseInterface } from '@/application/contexts/post/useCases/findAvailableAgents/FindAvailableAgentsUseCaseInterface';
import { FindAvailableMapsUseCase } from '@/application/contexts/post/useCases/findAvailableMaps';
import { FindAvailableMapsUseCaseInterface } from '@/application/contexts/post/useCases/findAvailableMaps/FindAvailableMapsUseCaseInterface';
import { FindPostByIdOrThrowUseCase } from '@/application/contexts/post/useCases/findByIdOrThrow';
import { FindPostByIdOrThrowUseCaseInterface } from '@/application/contexts/post/useCases/findByIdOrThrow/IFindPostByIdOrThrowUseCase';
import { UpdatePostUseCase } from '@/application/contexts/post/useCases/update';
import { UpdatePostUseCaseInterface } from '@/application/contexts/post/useCases/update/UpdatePostUseCaseInterface';
import { CreateSuggestionUseCase } from '@/application/contexts/suggestions/useCases/create';
import { CreateSuggestionUseCaseInterface } from '@/application/contexts/suggestions/useCases/create/createSuggestionUseCase';
import { DeleteSuggestionByIdUseCase } from '@/application/contexts/suggestions/useCases/deleteById';
import { DeleteSuggestionByIdUseCaseInterface } from '@/application/contexts/suggestions/useCases/deleteById/DeleteSuggestionByIdUseCaseInterface';
import { FindAllSuggestionsUseCase } from '@/application/contexts/suggestions/useCases/findAll';
import { FindAllSuggestionsUseCaseInterface } from '@/application/contexts/suggestions/useCases/findAll/FindAllSuggestionsUseCaseInterface';
import { UpdateSuggestionByIdUseCase } from '@/application/contexts/suggestions/useCases/updateById';
import { UpdateSuggestionByIdUseCaseInterface } from '@/application/contexts/suggestions/useCases/updateById/UpdateSuggestionByIdUseCaseInterface';
import { CreateUserUseCase } from '@/application/contexts/user/useCases/create';
import { CreateUserUseCaseInterface } from '@/application/contexts/user/useCases/create/CreateUserUseCaseInterface';
import { DeleteUserByIdUseCase } from '@/application/contexts/user/useCases/deleteById';
import { DeleteUserByIdUseCaseInterface } from '@/application/contexts/user/useCases/deleteById/DeleteUserByIdUseCaseInterface';
import { FindUserByIdUseCase } from '@/application/contexts/user/useCases/findById';
import { FindUserByIdUseCaseInterface } from '@/application/contexts/user/useCases/findById/FindUserByIdUseCaseInterface';
import { UpdateUserUseCase } from '@/application/contexts/user/useCases/update';
import { UpdateUserUseCaseInterface } from '@/application/contexts/user/useCases/update/UpdateUserUseCaseInterface';
import { CreateViewUseCaseInterface } from '@/application/contexts/views/useCases/add/CreateViewUseCaseInterface';
import { GetViewUseCaseInterface } from '@/application/contexts/views/useCases/get/GetViewUseCaseInterface';
import { GetViewUseCase } from '@/application/contexts/views/useCases/get';
import { CreateViewUseCase } from '@/application/contexts/views/useCases/add';

export class AppDependencyInjector {
  private static dashboardControllerInstance: DashboardControllerInterface;

  private static suggestionControllerInstance: SuggestionControllerInterface;

  private static postControllerInstance: PostControllerInterface;

  private static authControllerInstance: AuthControllerInterface;

  private static codeControllerInstance: CodeControllerInterface;

  private static viewsControllerInstance: ViewsControllerInterface;

  private static userControllerInstance: UserControllerInterface;

  private static createSuggestionUseCaseInstance: CreateSuggestionUseCaseInterface;

  private static findAllSuggestionsUseCaseInstance: FindAllSuggestionsUseCaseInterface;

  private static updateSuggestionByIdUseCaseInstance: UpdateSuggestionByIdUseCaseInterface;

  private static deleteSuggestionByIdUseCaseInstance: DeleteSuggestionByIdUseCaseInterface;

  private static suggestionRepositoryInstance: SuggestionRepositoryInterface;

  private static createViewUseCaseInstance: CreateViewUseCaseInterface;

  private static getViewUseCaseInstance: GetViewUseCaseInterface;

  private static viewRepositoryInstance: ViewsRepositoryInterface;

  private static createUserUseCaseInstance: CreateUserUseCaseInterface;

  private static updateUserUseCaseInstance: UpdateUserUseCaseInterface;

  private static findUserByIdUseCaseInstance: FindUserByIdUseCaseInterface;

  private static createCodeUseCaseInstance: CreateCodeUseCaseInterface;

  private static deleteUserByIdUseCaseInstance: DeleteUserByIdUseCaseInterface;

  private static userRepositoryInstance: UserRepositoryInterface;

  private static codeRepositoryInstance: CodeRepositoryInterface;

  private static passwordHasherInstance: PasswordHasherInterface;

  private static loginUseCaseInstance: LoginUseCaseInterface;

  private static createPostUseCaseInstance: CreatePostUseCaseInterface;

  private static updatePostUseCaseInstance: UpdatePostUseCaseInterface;

  private static findPostByIdOrThrowUseCaseInstance: FindPostByIdOrThrowUseCaseInterface;

  private static findAvailableMapsUseCaseInstance: FindAvailableMapsUseCaseInterface;

  private static findAvailableAgentsUseCaseInstance: FindAvailableAgentsUseCaseInterface;

  private static findAllPostUseCaseInstance: FindAllPostUseCaseInterface;

  private static findAllByMapAndAgentUseCaseInstance: FindAllByMapAndAgentUseCaseInterface;

  private static deletePostUseCaseInstance: DeletePostUseCaseInterface;

  private static postRepositoryInstance: PostRepositoryInterface;

  private static dashboardUseCaseInstance: DashboardUseCaseInterface;

  private static handleAuthTokenInstance: HandleAuthTokenInterface;

  static get handleAuthToken(): HandleAuthTokenInterface {
    if (!this.handleAuthTokenInstance) {
      this.handleAuthTokenInstance = new HandleAuthToken();
    }

    return this.handleAuthTokenInstance;
  }

  static get authController(): AuthControllerInterface {
    if (!this.authControllerInstance) {
      this.authControllerInstance = new AuthController(this.loginUseCase);
    }

    return this.authControllerInstance;
  }

  static get dashboardController(): DashboardControllerInterface {
    if (!this.dashboardControllerInstance) {
      this.dashboardControllerInstance = new DashboardController(this.DashboardUseCase);
    }

    return this.dashboardControllerInstance;
  }

  static get suggestionController(): SuggestionControllerInterface {
    if (!this.suggestionControllerInstance) {
      this.suggestionControllerInstance = new SuggestionController(
        this.createSuggestionUseCase,
        this.findAllSuggestionsUseCase,
        this.updateSuggestionByIdUseCase,
        this.deleteSuggestionByIdUseCase,
      );
    }
    return this.suggestionControllerInstance;
  }

  static get codeController(): CodeControllerInterface {
    if (!this.codeControllerInstance) {
      this.codeControllerInstance = new CodeController(this.createCodeUseCase);
    }

    return this.codeControllerInstance;
  }

  static get userController(): UserControllerInterface {
    if (!this.userControllerInstance) {
      this.userControllerInstance = new UserController(
        this.createUserUseCase,
        this.updateUserUseCase,
        this.findUserByIdUseCase,
        this.deleteUserByIdUseCase,
      );
    }
    return this.userControllerInstance;
  }

  static get viewsController(): ViewsControllerInterface {
    if (!this.viewsControllerInstance) {
      this.viewsControllerInstance = new ViewsController(this.createViewUseCase, this.getViewUseCase);
    }
    return this.viewsControllerInstance;
  }

  static get postController(): PostControllerInterface {
    if (!this.postControllerInstance) {
      this.postControllerInstance = new PostController(
        this.createPostUseCase,
        this.updatePostUseCase,
        this.findPostByIdOrThrowUseCase,
        this.findAvailableMapsUseCase,
        this.findAvailableAgentsUseCase,
        this.findAllPostUseCase,
        this.findAllByMapAndAgentUseCase,
        this.deletePostUseCase,
      );
    }

    return this.postControllerInstance;
  }

  static get DashboardUseCase(): DashboardUseCaseInterface {
    if (!this.dashboardUseCaseInstance) {
      this.dashboardUseCaseInstance = new DashboardUseCase(
        this.userRepository,
        this.postRepository,
        this.suggestionRepository,
        this.viewRepository,
      );
    }
    return this.dashboardUseCaseInstance;
  }

  static get suggestionRepository(): SuggestionRepositoryInterface {
    if (!this.suggestionRepositoryInstance) {
      this.suggestionRepositoryInstance = new SuggestionRepository();
    }
    return this.suggestionRepositoryInstance;
  }

  static get createSuggestionUseCase(): CreateSuggestionUseCaseInterface {
    if (!this.createSuggestionUseCaseInstance) {
      this.createSuggestionUseCaseInstance = new CreateSuggestionUseCase(
        this.suggestionRepository,
        this.postRepository,
      );
    }

    return this.createSuggestionUseCaseInstance;
  }

  static get findAllSuggestionsUseCase(): FindAllSuggestionsUseCaseInterface {
    if (!this.findAllSuggestionsUseCaseInstance) {
      this.findAllSuggestionsUseCaseInstance = new FindAllSuggestionsUseCase(this.suggestionRepository);
    }

    return this.findAllSuggestionsUseCaseInstance;
  }

  static get updateSuggestionByIdUseCase(): UpdateSuggestionByIdUseCaseInterface {
    if (!this.updateSuggestionByIdUseCaseInstance) {
      this.updateSuggestionByIdUseCaseInstance = new UpdateSuggestionByIdUseCase(this.suggestionRepository);
    }

    return this.updateSuggestionByIdUseCaseInstance;
  }

  static get deleteSuggestionByIdUseCase(): DeleteSuggestionByIdUseCaseInterface {
    if (!this.deleteSuggestionByIdUseCaseInstance) {
      this.deleteSuggestionByIdUseCaseInstance = new DeleteSuggestionByIdUseCase(this.suggestionRepository);
    }

    return this.deleteSuggestionByIdUseCaseInstance;
  }

  static get loginUseCase(): LoginUseCaseInterface {
    if (!this.loginUseCaseInstance) {
      this.loginUseCaseInstance = new LoginUseCase(this.userRepository, this.passwordHasher, this.handleAuthToken);
    }

    return this.loginUseCaseInstance;
  }

  static get createPostUseCase(): CreatePostUseCaseInterface {
    if (!this.createPostUseCaseInstance) {
      this.createPostUseCaseInstance = new CreatePostUseCase(this.postRepository, this.userRepository);
    }

    return this.createPostUseCaseInstance;
  }

  static get updatePostUseCase(): UpdatePostUseCaseInterface {
    if (!this.updatePostUseCaseInstance) {
      this.updatePostUseCaseInstance = new UpdatePostUseCase(this.postRepository, this.userRepository);
    }

    return this.updatePostUseCaseInstance;
  }

  static get findPostByIdOrThrowUseCase(): FindPostByIdOrThrowUseCaseInterface {
    if (!this.findPostByIdOrThrowUseCaseInstance) {
      this.findPostByIdOrThrowUseCaseInstance = new FindPostByIdOrThrowUseCase(
        this.postRepository,
        this.userRepository,
      );
    }

    return this.findPostByIdOrThrowUseCaseInstance;
  }

  static get findAvailableMapsUseCase(): FindAvailableMapsUseCaseInterface {
    if (!this.findAvailableMapsUseCaseInstance) {
      this.findAvailableMapsUseCaseInstance = new FindAvailableMapsUseCase(this.postRepository);
    }

    return this.findAvailableMapsUseCaseInstance;
  }

  static get findAvailableAgentsUseCase(): FindAvailableAgentsUseCaseInterface {
    if (!this.findAvailableAgentsUseCaseInstance) {
      this.findAvailableAgentsUseCaseInstance = new FindAvailableAgentsUseCase(this.postRepository);
    }

    return this.findAvailableAgentsUseCaseInstance;
  }

  static get findAllPostUseCase(): FindAllPostUseCaseInterface {
    if (!this.findAllPostUseCaseInstance) {
      this.findAllPostUseCaseInstance = new FindAllPostUseCase(this.postRepository, this.userRepository);
    }

    return this.findAllPostUseCaseInstance;
  }

  static get findAllByMapAndAgentUseCase(): FindAllByMapAndAgentUseCaseInterface {
    if (!this.findAllByMapAndAgentUseCaseInstance) {
      this.findAllByMapAndAgentUseCaseInstance = new FindAllByMapAndAgentUseCase(
        this.postRepository,
        this.userRepository,
      );
    }

    return this.findAllByMapAndAgentUseCaseInstance;
  }

  static get deletePostUseCase(): DeletePostUseCaseInterface {
    if (!this.deletePostUseCaseInstance) {
      this.deletePostUseCaseInstance = new DeletePostUseCase(this.postRepository);
    }

    return this.deletePostUseCaseInstance;
  }

  static get postRepository(): PostRepositoryInterface {
    if (!this.postRepositoryInstance) {
      this.postRepositoryInstance = new PostRepository();
    }

    return this.postRepositoryInstance;
  }

  static get userRepository(): UserRepositoryInterface {
    if (!this.userRepositoryInstance) {
      this.userRepositoryInstance = new UserRepository();
    }
    return this.userRepositoryInstance;
  }

  static get codeRepository(): CodeRepositoryInterface {
    if (!this.codeRepositoryInstance) {
      this.codeRepositoryInstance = new CodeRepository();
    }
    return this.codeRepositoryInstance;
  }

  static get createCodeUseCase(): CreateCodeUseCaseInterface {
    if (!this.createCodeUseCaseInstance) {
      this.createCodeUseCaseInstance = new CreateCodeUseCase(this.codeRepository);
    }

    return this.createCodeUseCaseInstance;
  }

  static get passwordHasher(): PasswordHasherInterface {
    if (!this.passwordHasherInstance) {
      this.passwordHasherInstance = new PasswordHasher();
    }
    return this.passwordHasherInstance;
  }

  static get createUserUseCase(): CreateUserUseCaseInterface {
    if (!this.createUserUseCaseInstance) {
      this.createUserUseCaseInstance = new CreateUserUseCase(
        this.userRepository,
        this.codeRepository,
        this.passwordHasher,
      );
    }
    return this.createUserUseCaseInstance;
  }

  static get updateUserUseCase(): UpdateUserUseCaseInterface {
    if (!this.updateUserUseCaseInstance) {
      this.updateUserUseCaseInstance = new UpdateUserUseCase(this.userRepository, this.passwordHasher);
    }
    return this.updateUserUseCaseInstance;
  }

  static get findUserByIdUseCase(): FindUserByIdUseCaseInterface {
    if (!this.findUserByIdUseCaseInstance) {
      this.findUserByIdUseCaseInstance = new FindUserByIdUseCase(this.userRepository);
    }
    return this.findUserByIdUseCaseInstance;
  }

  static get deleteUserByIdUseCase(): DeleteUserByIdUseCaseInterface {
    if (!this.deleteUserByIdUseCaseInstance) {
      this.deleteUserByIdUseCaseInstance = new DeleteUserByIdUseCase(this.userRepository);
    }
    return this.deleteUserByIdUseCaseInstance;
  }

  static get viewRepository(): ViewsRepositoryInterface {
    if (!this.viewRepositoryInstance) {
      this.viewRepositoryInstance = new ViewsRepository();
    }
    return this.viewRepositoryInstance;
  }

  static get createViewUseCase(): CreateViewUseCaseInterface {
    if (!this.createViewUseCaseInstance) {
      this.createViewUseCaseInstance = new CreateViewUseCase(this.viewRepository);
    }
    return this.createViewUseCaseInstance;
  }

  static get getViewUseCase(): GetViewUseCaseInterface {
    if (!this.getViewUseCaseInstance) {
      this.getViewUseCaseInstance = new GetViewUseCase(this.viewRepository);
    }

    return this.getViewUseCaseInstance;
  }
}
