export class ConflictError extends Error {
  constructor() {
    super('Client ID conflict');
    this.name = 'ConflictError';
  }
}
