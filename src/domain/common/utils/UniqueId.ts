import { v7 } from 'uuid';

/**
 * This function serves to decouple the v7 from the entities, but without needing to be injected, which would make the code much more verbose. This is a tradeoff I accepted
 */
export class UniqueId {
  id: string;

  constructor(id: string = v7()) {
    this.id = id;
  }

  getValue(): string {
    return this.id;
  }
}
