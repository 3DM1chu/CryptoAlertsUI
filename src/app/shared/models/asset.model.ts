import { PriceRecord } from './pricerecord.model';

export class Asset {
  id: number = 0;
  symbol: string = '';
  priceRecords: PriceRecord[] = [];
}
