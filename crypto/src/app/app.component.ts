import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BitcoinMarket } from '../models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bitcoinMarketCap: BitcoinMarket = new BitcoinMarket();

  constructor(public cryptoService: CryptoService) {
    this.getBitcoinStats();
  }

  getBitcoinStats(): void {
    this.cryptoService.getBitcoinmarketCap().subscribe((stats: BitcoinMarket) => {
      // console.log(stats);
      // this.bitcoinMarketCap = new BitcoinMarket(stats);
      this.bitcoinMarketCap = stats;
      // console.log(this.bitcoinMarketCap)
    });
  }
}
