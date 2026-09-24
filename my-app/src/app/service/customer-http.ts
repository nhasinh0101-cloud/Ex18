import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import {
  Observable,
  retry,
  catchError,
  throwError
} from 'rxjs';

import { CustomerType } from '../classes/ICustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerHttp {

  private _url: string = 'assets/data/customers.json';

  constructor(private _http: HttpClient) { }

  getCustomers(): Observable<CustomerType[]> {
    return this._http.get<CustomerType[]>(this._url);
  }

  getCustomersHandleError(): Observable<CustomerType[]> {
    return this._http
      .get<CustomerType[]>(this._url)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    return throwError(
      () => new Error(error.message)
    );
  }
}