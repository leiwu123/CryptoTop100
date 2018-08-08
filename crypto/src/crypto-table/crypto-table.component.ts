import { Component, OnInit, OnDestroy } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoCurrency } from '../models';
import { sortValues } from '../models/datasets';

@Component({
  selector: 'crypto-table',
  templateUrl: './crypto-table.component.html',
  styleUrls: ['./crypto-table.component.css'],
})

export class CryptoTableComponent implements OnInit, OnDestroy {
  public top100Cryptos: CryptoCurrency[];
  public filteredCryptos: CryptoCurrency[];
  public sortValues: any = sortValues;
  public priceUnit: string = 'USD';
  public top100CryptosSub: any;

  constructor(public cryptoService: CryptoService) {}

  public ngOnInit(): void {
    this.getTop100Cryptos();
  }

  public ngOnDestroy(): void {
    this.top100CryptosSub.unsubscribe();
  }

  public getTop100Cryptos(): void {
    // this.cryptoService.getAllCryptos().subscribe((data: any) => {
    //   this.top100Cryptos = data.map((element: any) => {
    //     return new CryptoCurrency(element);
    //   })
    //   // console.log(this.top100Cryptos);
    //   this.filteredCryptos = this.top100Cryptos;
    // });
    this.top100CryptosSub = this.cryptoService.getAllCryptos().subscribe((data: CryptoCurrency[]) => {
      this.top100Cryptos = data;
      // console.log(this.top100Cryptos);
      this.filteredCryptos = this.top100Cryptos;
    });
  }

  public listenFilterCryptos(e: CryptoCurrency[]) {
    this.filteredCryptos = e;
  }

  public listenPriceUnit(e: string) {
    this.priceUnit = e;
    console.log(this.priceUnit);
  }

  public sortString(sortValue: boolean): void {
    if (sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        } else if ( nameA > nameB ) {
          return 1;
        }

        return 0;
      })
    } else {
      this.top100Cryptos = this.top100Cryptos.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA > nameB) {
          return -1;
        } else if ( nameA < nameB ) {
          return 1;
        }

        return 0;
      })
    }
  }

  public sortNumeric(sortValue: boolean, key: string) {
    if (sortValue) {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
        return a[key] - b[key];
      });
    } else {
      this.top100Cryptos = this.top100Cryptos.sort((a: CryptoCurrency, b: CryptoCurrency) => {
        return b[key] - a[key];
      });
    }
  }
}