export class BaseType {
  constructor() {
    this.createdAt = new Date();
    this.updatedAt = null;
    this.deletedAt = null;
  }

  createdAt: Date;

  updatedAt: Date | null;

  deletedAt: Date | null;
}

export default BaseType;
