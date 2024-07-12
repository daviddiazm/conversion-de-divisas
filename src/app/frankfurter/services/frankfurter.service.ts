import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, pipe, tap } from 'rxjs';
import { Currency } from '../interfaces/currency.interface';

@Injectable({providedIn: 'root'})
export class FrankfurterService {
  constructor( private http: HttpClient ) { }

  public getCurrencies () :Observable<Currency> {
    let url = "https://api.frankfurter.app/latest"
    return this.http.get<Currency>(url)
      .pipe(
        catchError(() => of()),
        tap(e => console.log(e))
      )
  }
}
