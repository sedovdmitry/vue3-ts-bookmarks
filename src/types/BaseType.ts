export class BaseType {
  constructor() {
    this.id = Math.floor(Math.random() * (1000000 + 1));
    this.createdAt = Date.now();
    this.updatedAt = null;
    this.deletedAt = null;
  }

  id: number;

  createdAt: number;

  updatedAt: number | null;

  deletedAt: number | null;
}

export default BaseType;
