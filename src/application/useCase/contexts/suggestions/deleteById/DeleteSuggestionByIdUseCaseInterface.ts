export interface DeleteSuggestionByIdUseCaseInterface {
  execute: (id: string) => Promise<void>;
}
