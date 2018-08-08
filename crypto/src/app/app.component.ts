import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../node_modules/rxjs';
import { CryptoService } from '../services/crypto.service';
import { BitcoinMarket } from '../models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  bitcoinMarketCap: BitcoinMarket = new BitcoinMarket();
  public bitcoinStatsSub: Subscription;

  constructor(public cryptoService: CryptoService) {}

  public ngOnInit(): void {
    this.getBitcoinStats();
  }

  public ngOnDestroy(): void {
    this.bitcoinStatsSub.unsubscribe();
  }

  getBitcoinStats(): void {
    this.bitcoinStatsSub = this.cryptoService.getBitcoinmarketCap().subscribe((stats: BitcoinMarket) => {
      // console.log(stats);
      // this.bitcoinMarketCap = new BitcoinMarket(stats);
      this.bitcoinMarketCap = stats;
      // console.log(this.bitcoinMarketCap)
    });
  }
}
