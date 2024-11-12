import { PriceRecord } from './pricerecord.model';

export class Token {
  id: number = 0;
  symbol: string = '';
  priceRecords: PriceRecord[] = [];
}
