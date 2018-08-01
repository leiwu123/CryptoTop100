export class CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  price_btc: number;
  market_cap_usd: number;
  available_supply: number;
  total_supply: number;
  max_supply: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_cahnge_7d: number;
  last_updated: Date;

  constructor(data?: any) {
    const defaults: any = {
      ...data
    };

    this.id = defaults.id;
    this.name = defaults.name;
    this.symbol = defaults.symbol;
    this.rank = Number(defaults.rank);
    this.price_usd = Number(defaults.price_usd);
    this.price_btc = Number(defaults.price_btc);
    this.market_cap_usd = Number(defaults.market_cap_usd);
    this.available_supply = Number(defaults.available_supply);
    this.total_supply = Number(defaults.total_supply);
    this.max_supply = Number(defaults.max_supply);
    this.percent_change_1h = Number(defaults.percent_change_1h);
    this.percent_change_24h = Number(defaults.percent_change_24h);
    this.percent_cahnge_7d = Number(defaults.percent_change_7d);
    this.last_updated = new Date(Number(defaults.last_updated))
  }
}