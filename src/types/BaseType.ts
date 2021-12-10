export class BaseType {
  constructor() {
    this.createdAt = Date.now();
    this.updatedAt = null;
    this.deletedAt = null;
  }

  createdAt: number;

  updatedAt: number | null;

  deletedAt: number | null;
}

export default BaseType;
