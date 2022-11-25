import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private _httpClient: HttpClient) { }

  getCount(){
    const url = "http://bankapp.endcom.mx/api/bankappTest/cuenta";
    return this._httpClient.get<any>(url)
  }
}
