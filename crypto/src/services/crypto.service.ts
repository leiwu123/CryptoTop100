import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class CryptoService {
  constructor(public http: HttpClient) {}

  public getBitcoinmarketCap() {
    return this.http.get('https://api.coinmarketcap.com/v2/global/');
  }
}