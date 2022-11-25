import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopSectionService {

  constructor(private _httpClient: HttpClient) { }

  getBalance(){
    const url = "http://bankapp.endcom.mx/api/bankappTest/saldos";
    return this._httpClient.get<any>(url)
  }
}
