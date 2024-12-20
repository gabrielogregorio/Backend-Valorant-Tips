/* eslint-disable max-lines */
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
import { HandleAuthToken } from '@/infrastructure/services/HandleAuthToken';
import { handleAuthTokenInterface } from '@/application/services/HandleAuthToken';
import { MapsRepositoryInterface } from '@/domain/contexts/contexts/maps/repository';
import { MapsRepository } from '@/infrastructure/contexts/maps/repository/mongo/mapsRepository';
import { CreateMapUseCase } from '@/application/contexts/maps/useCases/add';
import { CreateMapUseCaseInterface } from '@/application/contexts/maps/useCases/add/CreateMapUseCaseInterface';
import { GetMapsUseCaseInterface } from '@/application/contexts/maps/useCases/get/GetMapsUseCaseInterface';
import { GetMapsUseCase } from '@/application/contexts/maps/useCases/get';
import { MapsControllerInterface } from '@/infrastructure/api/controllers/interfaces/MapsControllerInterface';
import { MapsController } from '@/infrastructure/api/controllers/mapsController';
import { CreateAgentUseCase } from '@/application/contexts/agents/useCases/add';
import { CreateAgentUseCaseInterface } from '@/application/contexts/agents/useCases/add/CreateAgentUseCaseInterface';
import { AgentsRepository } from '@/infrastructure/contexts/agents/repository/mongo/agentsRepository';
import { AgentsRepositoryInterface } from '@/domain/contexts/contexts/agents/repository';
import { GetAgentsUseCaseInterface } from '@/application/contexts/agents/useCases/get/GetAgentsUseCaseInterface';
import { GetAgentsUseCase } from '@/application/contexts/agents/useCases/get';
import { AgentsControllerInterface } from '@/infrastructure/api/controllers/interfaces/AgentsControllerInterface';
import { AgentsController } from '@/infrastructure/api/controllers/agentsController';
import { PostTagCategoryRepositoryInterface } from '@/domain/contexts/contexts/postTagCategory/repository';
import { PostTagCategoryRepository } from '@/infrastructure/contexts/postTagCategory/repository/mongo/postTagCategoryRepository';
import { CreatePostTagCategoryUseCase } from '@/application/contexts/postTagCategory/useCases/add';
import { GetPostTagCategoryUseCaseInterface } from '@/application/contexts/postTagCategory/useCases/get/GetPostTagCategoryUseCaseInterface';
import { GetPostTagCategoryUseCase } from '@/application/contexts/postTagCategory/useCases/get';
import { PostTagCategoryController } from '@/infrastructure/api/controllers/postTagCategoryController';
import { PostTagCategoryControllerInterface } from '@/infrastructure/api/controllers/interfaces/PostTagCategoryControllerInterface';
import { PostTagsRepositoryInterface } from '@/domain/contexts/contexts/postTags/repository';
import { PostTagsRepository } from '@/infrastructure/contexts/postTags/repository/mongo/postTagsRepository';
import { CreatePostTagsUseCaseInterface } from '@/application/contexts/postTags/useCases/add/CreatePostTagsUseCaseInterface';
import { CreatePostTagsUseCase } from '@/application/contexts/postTags/useCases/add';
import { GetPostTagsUseCaseInterface } from '@/application/contexts/postTags/useCases/get/GetPostTagsUseCaseInterface';
import { GetPostTagsUseCase } from '@/application/contexts/postTags/useCases/get';
import { PostTagsControllerInterface } from '@/infrastructure/api/controllers/interfaces/PostTagsControllerInterface';
import { PostTagsController } from '@/infrastructure/api/controllers/postTagsController';
import { CreatePostTagCategoryUseCaseInterface } from '@/application/contexts/postTagCategory/useCases/add/CreatePostTagCategoryUseCaseInterface';

export class AppDependencyInjector {
  private static _dashboardControllerInstance: DashboardControllerInterface;

  private static _suggestionControllerInstance: SuggestionControllerInterface;

  private static _postControllerInstance: PostControllerInterface;

  private static _authControllerInstance: AuthControllerInterface;

  private static _codeControllerInstance: CodeControllerInterface;

  private static _viewsControllerInstance: ViewsControllerInterface;

  private static _userControllerInstance: UserControllerInterface;

  private static _createSuggestionUseCaseInstance: CreateSuggestionUseCaseInterface;

  private static _findAllSuggestionsUseCaseInstance: FindAllSuggestionsUseCaseInterface;

  private static _updateSuggestionByIdUseCaseInstance: UpdateSuggestionByIdUseCaseInterface;

  private static _deleteSuggestionByIdUseCaseInstance: DeleteSuggestionByIdUseCaseInterface;

  private static _suggestionRepositoryInstance: SuggestionRepositoryInterface;

  private static _createViewUseCaseInstance: CreateViewUseCaseInterface;

  private static _getViewUseCaseInstance: GetViewUseCaseInterface;

  private static _viewRepositoryInstance: ViewsRepositoryInterface;

  private static _createUserUseCaseInstance: CreateUserUseCaseInterface;

  private static _updateUserUseCaseInstance: UpdateUserUseCaseInterface;

  private static _findUserByIdUseCaseInstance: FindUserByIdUseCaseInterface;

  private static _createCodeUseCaseInstance: CreateCodeUseCaseInterface;

  private static _deleteUserByIdUseCaseInstance: DeleteUserByIdUseCaseInterface;

  private static _userRepositoryInstance: UserRepositoryInterface;

  private static _codeRepositoryInstance: CodeRepositoryInterface;

  private static _passwordHasherInstance: PasswordHasherInterface;

  private static _loginUseCaseInstance: LoginUseCaseInterface;

  private static _createPostUseCaseInstance: CreatePostUseCaseInterface;

  private static _updatePostUseCaseInstance: UpdatePostUseCaseInterface;

  private static _findPostByIdOrThrowUseCaseInstance: FindPostByIdOrThrowUseCaseInterface;

  private static _findAvailableMapsUseCaseInstance: FindAvailableMapsUseCaseInterface;

  private static _findAvailableAgentsUseCaseInstance: FindAvailableAgentsUseCaseInterface;

  private static _findAllPostUseCaseInstance: FindAllPostUseCaseInterface;

  private static _findAllByMapAndAgentUseCaseInstance: FindAllByMapAndAgentUseCaseInterface;

  private static _deletePostUseCaseInstance: DeletePostUseCaseInterface;

  private static _postRepositoryInstance: PostRepositoryInterface;

  private static _dashboardUseCaseInstance: DashboardUseCaseInterface;

  private static _handleAuthTokenInstance: handleAuthTokenInterface;

  static get handleAuthToken(): handleAuthTokenInterface {
    if (!this._handleAuthTokenInstance) {
      this._handleAuthTokenInstance = new HandleAuthToken();
    }

    return this._handleAuthTokenInstance;
  }

  private static _mapsRepositoryInstance: MapsRepositoryInterface;

  static get mapsRepository(): MapsRepositoryInterface {
    if (!this._mapsRepositoryInstance) {
      this._mapsRepositoryInstance = new MapsRepository();
    }

    return this._mapsRepositoryInstance;
  }

  private static _postTagCategoryRepositoryInstance: PostTagCategoryRepositoryInterface;

  static get postTagCategoryRepository(): PostTagCategoryRepositoryInterface {
    if (!this._postTagCategoryRepositoryInstance) {
      this._postTagCategoryRepositoryInstance = new PostTagCategoryRepository();
    }

    return this._postTagCategoryRepositoryInstance;
  }

  private static _createPostTagCategoryUseCaseInstance: CreatePostTagCategoryUseCaseInterface;

  static get createPostTagCategoryUseCase(): CreatePostTagCategoryUseCaseInterface {
    if (!this._createPostTagCategoryUseCaseInstance) {
      this._createPostTagCategoryUseCaseInstance = new CreatePostTagCategoryUseCase(this.postTagCategoryRepository);
    }

    return this._createPostTagCategoryUseCaseInstance;
  }

  private static _getPostTagCategoryUseCaseInstance: GetPostTagCategoryUseCaseInterface;

  static get getPostTagCategoryUseCase(): GetPostTagCategoryUseCaseInterface {
    if (!this._getPostTagCategoryUseCaseInstance) {
      this._getPostTagCategoryUseCaseInstance = new GetPostTagCategoryUseCase(this.postTagCategoryRepository);
    }

    return this._getPostTagCategoryUseCaseInstance;
  }

  private static _mapsControllerInstance: MapsControllerInterface;

  static get mapsController(): MapsControllerInterface {
    if (!this._mapsControllerInstance) {
      this._mapsControllerInstance = new MapsController(this.createMapUseCase, this.getMapsUseCase);
    }

    return this._mapsControllerInstance;
  }

  private static _createAgentUseCaseInstance: CreateAgentUseCaseInterface;

  static get createAgentUseCase(): CreateAgentUseCaseInterface {
    if (!this._createAgentUseCaseInstance) {
      this._createAgentUseCaseInstance = new CreateAgentUseCase(this.agentsRepository);
    }

    return this._createAgentUseCaseInstance;
  }

  private static _getAgentsUseCaseInstance: GetAgentsUseCaseInterface;

  static get getAgentsUseCase(): GetAgentsUseCaseInterface {
    if (!this._getAgentsUseCaseInstance) {
      this._getAgentsUseCaseInstance = new GetAgentsUseCase(this.agentsRepository);
    }

    return this._getAgentsUseCaseInstance;
  }

  private static _createMapUseCaseInstance: CreateMapUseCaseInterface;

  static get createMapUseCase(): CreateMapUseCaseInterface {
    if (!this._createMapUseCaseInstance) {
      this._createMapUseCaseInstance = new CreateMapUseCase(this.mapsRepository);
    }

    return this._createMapUseCaseInstance;
  }

  private static _getMapsUseCaseInstance: GetMapsUseCaseInterface;

  static get getMapsUseCase(): GetMapsUseCaseInterface {
    if (!this._getMapsUseCaseInstance) {
      this._getMapsUseCaseInstance = new GetMapsUseCase(this.mapsRepository);
    }

    return this._getMapsUseCaseInstance;
  }

  private static _agentsRepositoryInstance: AgentsRepositoryInterface;

  static get agentsRepository(): AgentsRepositoryInterface {
    if (!this._agentsRepositoryInstance) {
      this._agentsRepositoryInstance = new AgentsRepository();
    }

    return this._agentsRepositoryInstance;
  }

  private static _agentsControllerInstance: AgentsControllerInterface;

  static get agentsController(): AgentsControllerInterface {
    if (!this._agentsControllerInstance) {
      this._agentsControllerInstance = new AgentsController(this.createAgentUseCase, this.getAgentsUseCase);
    }

    return this._agentsControllerInstance;
  }

  static get authController(): AuthControllerInterface {
    if (!this._authControllerInstance) {
      this._authControllerInstance = new AuthController(this.loginUseCase);
    }

    return this._authControllerInstance;
  }

  static get dashboardController(): DashboardControllerInterface {
    if (!this._dashboardControllerInstance) {
      this._dashboardControllerInstance = new DashboardController(this.dashboardUseCase);
    }

    return this._dashboardControllerInstance;
  }

  static get suggestionController(): SuggestionControllerInterface {
    if (!this._suggestionControllerInstance) {
      this._suggestionControllerInstance = new SuggestionController(
        this.createSuggestionUseCase,
        this.findAllSuggestionsUseCase,
        this.updateSuggestionByIdUseCase,
        this.deleteSuggestionByIdUseCase,
      );
    }
    return this._suggestionControllerInstance;
  }

  static get codeController(): CodeControllerInterface {
    if (!this._codeControllerInstance) {
      this._codeControllerInstance = new CodeController(this.createCodeUseCase);
    }

    return this._codeControllerInstance;
  }

  static get userController(): UserControllerInterface {
    if (!this._userControllerInstance) {
      this._userControllerInstance = new UserController(
        this.createUserUseCase,
        this.updateUserUseCase,
        this.findUserByIdUseCase,
        this.deleteUserByIdUseCase,
      );
    }
    return this._userControllerInstance;
  }

  static get viewsController(): ViewsControllerInterface {
    if (!this._viewsControllerInstance) {
      this._viewsControllerInstance = new ViewsController(this.createViewUseCase, this.getViewUseCase);
    }
    return this._viewsControllerInstance;
  }

  static get postController(): PostControllerInterface {
    if (!this._postControllerInstance) {
      this._postControllerInstance = new PostController(
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

    return this._postControllerInstance;
  }

  static get dashboardUseCase(): DashboardUseCaseInterface {
    if (!this._dashboardUseCaseInstance) {
      this._dashboardUseCaseInstance = new DashboardUseCase(
        this.userRepository,
        this.postRepository,
        this.suggestionRepository,
        this.viewRepository,
      );
    }
    return this._dashboardUseCaseInstance;
  }

  static get suggestionRepository(): SuggestionRepositoryInterface {
    if (!this._suggestionRepositoryInstance) {
      this._suggestionRepositoryInstance = new SuggestionRepository();
    }
    return this._suggestionRepositoryInstance;
  }

  static get createSuggestionUseCase(): CreateSuggestionUseCaseInterface {
    if (!this._createSuggestionUseCaseInstance) {
      this._createSuggestionUseCaseInstance = new CreateSuggestionUseCase(
        this.suggestionRepository,
        this.postRepository,
      );
    }

    return this._createSuggestionUseCaseInstance;
  }

  static get findAllSuggestionsUseCase(): FindAllSuggestionsUseCaseInterface {
    if (!this._findAllSuggestionsUseCaseInstance) {
      this._findAllSuggestionsUseCaseInstance = new FindAllSuggestionsUseCase(this.suggestionRepository);
    }

    return this._findAllSuggestionsUseCaseInstance;
  }

  static get updateSuggestionByIdUseCase(): UpdateSuggestionByIdUseCaseInterface {
    if (!this._updateSuggestionByIdUseCaseInstance) {
      this._updateSuggestionByIdUseCaseInstance = new UpdateSuggestionByIdUseCase(this.suggestionRepository);
    }

    return this._updateSuggestionByIdUseCaseInstance;
  }

  static get deleteSuggestionByIdUseCase(): DeleteSuggestionByIdUseCaseInterface {
    if (!this._deleteSuggestionByIdUseCaseInstance) {
      this._deleteSuggestionByIdUseCaseInstance = new DeleteSuggestionByIdUseCase(this.suggestionRepository);
    }

    return this._deleteSuggestionByIdUseCaseInstance;
  }

  static get loginUseCase(): LoginUseCaseInterface {
    if (!this._loginUseCaseInstance) {
      this._loginUseCaseInstance = new LoginUseCase(this.userRepository, this.passwordHasher, this.handleAuthToken);
    }

    return this._loginUseCaseInstance;
  }

  private static _postTagCategoryControllerInstance: PostTagCategoryControllerInterface;

  static get postTagCategoryController(): PostTagCategoryControllerInterface {
    if (!this._postTagCategoryControllerInstance) {
      this._postTagCategoryControllerInstance = new PostTagCategoryController(
        this.createPostTagCategoryUseCase,
        this.getPostTagCategoryUseCase,
      );
    }

    return this._postTagCategoryControllerInstance;
  }

  private static _postTagsRepositoryInstance: PostTagsRepositoryInterface;

  static get postTagsRepository(): PostTagsRepositoryInterface {
    if (!this._postTagsRepositoryInstance) {
      this._postTagsRepositoryInstance = new PostTagsRepository();
    }

    return this._postTagsRepositoryInstance;
  }

  private static _createPostTagsUseCaseInstance: CreatePostTagsUseCaseInterface;

  static get createPostTagsUseCase(): CreatePostTagsUseCaseInterface {
    if (!this._createPostTagsUseCaseInstance) {
      this._createPostTagsUseCaseInstance = new CreatePostTagsUseCase(
        this.postTagsRepository,
        this.postTagCategoryRepository,
      );
    }

    return this._createPostTagsUseCaseInstance;
  }

  private static _getPostTagsUseCaseInstance: GetPostTagsUseCaseInterface;

  static get getPostTagsUseCase(): GetPostTagsUseCaseInterface {
    if (!this._getPostTagsUseCaseInstance) {
      this._getPostTagsUseCaseInstance = new GetPostTagsUseCase(this.postTagsRepository);
    }

    return this._getPostTagsUseCaseInstance;
  }

  private static _postTagsControllerInstance: PostTagsControllerInterface;

  static get postTagsController(): PostTagsControllerInterface {
    if (!this._postTagsControllerInstance) {
      this._postTagsControllerInstance = new PostTagsController(this.createPostTagsUseCase, this.getPostTagsUseCase);
    }

    return this._postTagsControllerInstance;
  }

  static get createPostUseCase(): CreatePostUseCaseInterface {
    if (!this._createPostUseCaseInstance) {
      this._createPostUseCaseInstance = new CreatePostUseCase(this.postRepository, this.userRepository);
    }

    return this._createPostUseCaseInstance;
  }

  static get updatePostUseCase(): UpdatePostUseCaseInterface {
    if (!this._updatePostUseCaseInstance) {
      this._updatePostUseCaseInstance = new UpdatePostUseCase(
        this.postRepository,
        this.userRepository,
        this.mapsRepository,
        this.agentsRepository,
      );
    }

    return this._updatePostUseCaseInstance;
  }

  static get findPostByIdOrThrowUseCase(): FindPostByIdOrThrowUseCaseInterface {
    if (!this._findPostByIdOrThrowUseCaseInstance) {
      this._findPostByIdOrThrowUseCaseInstance = new FindPostByIdOrThrowUseCase(
        this.postRepository,
        this.userRepository,
      );
    }

    return this._findPostByIdOrThrowUseCaseInstance;
  }

  static get findAvailableMapsUseCase(): FindAvailableMapsUseCaseInterface {
    if (!this._findAvailableMapsUseCaseInstance) {
      this._findAvailableMapsUseCaseInstance = new FindAvailableMapsUseCase(this.postRepository);
    }

    return this._findAvailableMapsUseCaseInstance;
  }

  static get findAvailableAgentsUseCase(): FindAvailableAgentsUseCaseInterface {
    if (!this._findAvailableAgentsUseCaseInstance) {
      this._findAvailableAgentsUseCaseInstance = new FindAvailableAgentsUseCase(this.postRepository);
    }

    return this._findAvailableAgentsUseCaseInstance;
  }

  static get findAllPostUseCase(): FindAllPostUseCaseInterface {
    if (!this._findAllPostUseCaseInstance) {
      this._findAllPostUseCaseInstance = new FindAllPostUseCase(this.postRepository, this.userRepository);
    }

    return this._findAllPostUseCaseInstance;
  }

  static get findAllByMapAndAgentUseCase(): FindAllByMapAndAgentUseCaseInterface {
    if (!this._findAllByMapAndAgentUseCaseInstance) {
      this._findAllByMapAndAgentUseCaseInstance = new FindAllByMapAndAgentUseCase(
        this.postRepository,
        this.userRepository,
      );
    }

    return this._findAllByMapAndAgentUseCaseInstance;
  }

  static get deletePostUseCase(): DeletePostUseCaseInterface {
    if (!this._deletePostUseCaseInstance) {
      this._deletePostUseCaseInstance = new DeletePostUseCase(this.postRepository);
    }

    return this._deletePostUseCaseInstance;
  }

  static get postRepository(): PostRepositoryInterface {
    if (!this._postRepositoryInstance) {
      this._postRepositoryInstance = new PostRepository();
    }

    return this._postRepositoryInstance;
  }

  static get userRepository(): UserRepositoryInterface {
    if (!this._userRepositoryInstance) {
      this._userRepositoryInstance = new UserRepository();
    }
    return this._userRepositoryInstance;
  }

  static get codeRepository(): CodeRepositoryInterface {
    if (!this._codeRepositoryInstance) {
      this._codeRepositoryInstance = new CodeRepository();
    }
    return this._codeRepositoryInstance;
  }

  static get createCodeUseCase(): CreateCodeUseCaseInterface {
    if (!this._createCodeUseCaseInstance) {
      this._createCodeUseCaseInstance = new CreateCodeUseCase(this.codeRepository);
    }

    return this._createCodeUseCaseInstance;
  }

  static get passwordHasher(): PasswordHasherInterface {
    if (!this._passwordHasherInstance) {
      this._passwordHasherInstance = new PasswordHasher();
    }
    return this._passwordHasherInstance;
  }

  static get createUserUseCase(): CreateUserUseCaseInterface {
    if (!this._createUserUseCaseInstance) {
      this._createUserUseCaseInstance = new CreateUserUseCase(
        this.userRepository,
        this.codeRepository,
        this.passwordHasher,
      );
    }
    return this._createUserUseCaseInstance;
  }

  static get updateUserUseCase(): UpdateUserUseCaseInterface {
    if (!this._updateUserUseCaseInstance) {
      this._updateUserUseCaseInstance = new UpdateUserUseCase(this.userRepository, this.passwordHasher);
    }
    return this._updateUserUseCaseInstance;
  }

  static get findUserByIdUseCase(): FindUserByIdUseCaseInterface {
    if (!this._findUserByIdUseCaseInstance) {
      this._findUserByIdUseCaseInstance = new FindUserByIdUseCase(this.userRepository);
    }
    return this._findUserByIdUseCaseInstance;
  }

  static get deleteUserByIdUseCase(): DeleteUserByIdUseCaseInterface {
    if (!this._deleteUserByIdUseCaseInstance) {
      this._deleteUserByIdUseCaseInstance = new DeleteUserByIdUseCase(this.userRepository);
    }
    return this._deleteUserByIdUseCaseInstance;
  }

  static get viewRepository(): ViewsRepositoryInterface {
    if (!this._viewRepositoryInstance) {
      this._viewRepositoryInstance = new ViewsRepository();
    }
    return this._viewRepositoryInstance;
  }

  static get createViewUseCase(): CreateViewUseCaseInterface {
    if (!this._createViewUseCaseInstance) {
      this._createViewUseCaseInstance = new CreateViewUseCase(this.viewRepository);
    }
    return this._createViewUseCaseInstance;
  }

  static get getViewUseCase(): GetViewUseCaseInterface {
    if (!this._getViewUseCaseInstance) {
      this._getViewUseCaseInstance = new GetViewUseCase(this.viewRepository);
    }

    return this._getViewUseCaseInstance;
  }
}
