import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  constructor(private _httpClient: HttpClient) { }

  getCards(){
    const url = "http://bankapp.endcom.mx/api/bankappTest/tarjetas";
    return this._httpClient.get<any>(url)
  }
}
