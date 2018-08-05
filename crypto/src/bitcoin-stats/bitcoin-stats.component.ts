import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BitcoinPrice } from '../models/bitcoin-price.class';
import { PriceCoordinates } from '../models/price-coordinates.interface';

@Component({
  selector: 'bitcoin-stats',
  templateUrl: './bitcoin-stats.component.html',
  styleUrls: ['./bitcoin-stats.component.css']
})

export class BitcoinStatsComponent {
  public bitcoinStats: BitcoinPrice = new BitcoinPrice();
  public prices: number[];
  public dates: string[];
  public options: any;
  public type: any;
  public chartData: any;


  constructor(public cryptoService: CryptoService) {
    this.cryptoService.getBitcoinPriceStats().subscribe((data: any) => {
      // console.log(data);
      this.bitcoinStats = new BitcoinPrice(data);
      this.prices = this.convertPrices();
      this.dates = this.convertDates();
      // console.log(this.prices)
      // console.log(this.dates)
      this.type = 'line';
      this.chartData = {
        labels: [...this.dates],
        datasets: [
          {
            label: `Bitcoin (${this.bitcoinStats.unit})`,
            data: [...this.prices],
            backgroundColor: 'rgba(0,0,0, .5)',
            borderColor: '#6699f6'
          }
        ]
      };
      this.options = {
          legend: {
            labels: {
              fontColor: 'white'
            }
          },
        responsive: true,
        maintainAspectRatio: false
      };
    })
  }

  public convertDates(): string[] {
    const dates = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
      const rawDate = new Date(coordinates.x * 1000);
      // console.log(rawDate);
      return `${rawDate.getMonth()}/${rawDate.getDay()}/${rawDate.getFullYear()}`;
    });
    return dates;

  }

  public convertPrices(): number[] {
    const prices = this.bitcoinStats.values.map((coordinates: PriceCoordinates) => {
      return Number((coordinates.y).toFixed(2));
    });
    return prices;
  }
}