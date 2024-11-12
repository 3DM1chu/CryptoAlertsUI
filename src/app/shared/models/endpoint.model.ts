import { Asset } from './asset.model';

export class Endpoint {
  id: number = 0;
  name: string = '';
  url: string = '';
  assets: Asset[] = [];
}
