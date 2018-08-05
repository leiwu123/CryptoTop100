import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ChartModule } from 'angular2-chartjs';

import { AppComponent } from './app.component';
import { CryptoService } from '../services/crypto.service';
import { CryptoTableComponent } from '../crypto-table/crypto-table.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { BitcoinStatsComponent } from '../bitcoin-stats/bitcoin-stats.component';

const appRoutes: Routes = [
  { path: '', component: CryptoTableComponent },
  { path: 'bitcoinstats', component: BitcoinStatsComponent },
  // { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CryptoTableComponent,
    NotFoundComponent,
    BitcoinStatsComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
