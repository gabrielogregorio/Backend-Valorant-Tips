export interface RepositoryInterface<T> {
  save(entity: T): Promise<T | void>;
}
