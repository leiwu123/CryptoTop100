import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { BitcoinMarket } from '../models/bitcoin-market.class'

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
    this.cryptoService.getBitcoinmarketCap().subscribe((stats: any) => {
      console.log(stats);
      this.bitcoinMarketCap = new BitcoinMarket(stats);
      console.log(this.bitcoinMarketCap)
    });
  }
}
