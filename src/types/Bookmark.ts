import { BaseType } from '@/types/BaseType';

export class Bookmark extends BaseType {
  name: string;

  url: string;

  constructor(name: string, url: string) {
    super();
    this.name = name;
    this.url = url;
  }
}

export default Bookmark;
