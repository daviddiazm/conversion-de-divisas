import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap } from 'rxjs';
import { Stock } from '../interfaces/sotck.interface';
import { CurrencyType } from '../interfaces/currency-type.type';
import { CurrencyCollection } from '../interfaces/currencyCollection.interface';

@Injectable({ providedIn: 'root' })
export class FrankfurterService {

  private apiUrl: string = "https://api.frankfurter.app"
  private currencyCollection?: CurrencyCollection
  public validCurrencyTypes: Set<CurrencyType> = new Set([
    "AUD", "BGN", "BRL", "CAD", "CHF", "CNY", "CZK", "DKK",
    "GBP", "HKD", "HUF", "IDR", "ILS", "INR", "ISK", "JPY",
    "KRW", "MXN", "MYR", "NOK", "NZD", "PHP", "PLN", "RON",
    "SEK", "SGD", "THB", "TRY", "USD", "ZAR", ""
  ]);

  constructor(private http: HttpClient) {
    this.getAllCurrencies()
  }


  public verifyCurrencyExist(value: string): CurrencyType {
    if (this.validCurrencyTypes.has(value as CurrencyType)) {
      return value as CurrencyType;
    } else {
      return '' as CurrencyType;
    }
  }

  public getStock(currencyType: CurrencyType): Observable<Stock> {
    let url = `${this.apiUrl}/latest?from=${currencyType}`
    return this.http.get<Stock>(url)
      .pipe(
        catchError(() => of()),
        tap(e => console.log(e))
      )
  }


  public getAllCurrencies(): Observable<CurrencyCollection> {
    let url = `${this.apiUrl}/currencies`
    return this.http.get<CurrencyCollection>(url)
      .pipe(
        catchError(() => of()),
        tap(e => {
          console.log(e)
        })
      )
  }




}
