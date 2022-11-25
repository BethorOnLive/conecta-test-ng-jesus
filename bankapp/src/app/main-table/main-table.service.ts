import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainTableService {

  constructor(private _httpClient: HttpClient) { }

  getTransactions(){
    const url = "http://bankapp.endcom.mx/api/bankappTest/movimientos";
    return this._httpClient.get<any>(url)
  }
}
