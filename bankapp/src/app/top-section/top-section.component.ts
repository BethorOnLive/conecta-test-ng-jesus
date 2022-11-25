import { Component, OnInit } from '@angular/core';
import { TopSectionService } from './top-section.service';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {

  dataBalance: any

  constructor(private _balanceService: TopSectionService) { }

  getBalance() {
    this._balanceService.getBalance().subscribe((response) => {
       this.dataBalance = response.saldos;
      console.log("dataBalance: ", this.dataBalance);
    });
  }

  ngOnInit(): void {
    this.getBalance();
  }

}
