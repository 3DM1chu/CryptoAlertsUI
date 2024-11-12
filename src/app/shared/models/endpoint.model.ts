import { Token } from './token.model';

export class Endpoint {
  id: number = 0;
  name: string = '';
  url: string = '';
  tokens: Token[] = [];
}
