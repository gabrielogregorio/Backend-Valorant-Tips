import { randomUUID } from 'crypto';
/**
 * This function serves to decouple the randomUUID from the entities, but without needing to be injected, which would make the code much more verbose. This is a tradeoff I accepted
 */
export class UniqueId {
  id: string;

  constructor(id: string = randomUUID()) {
    this.id = id;
  }

  getValue(): string {
    return this.id;
  }
}
