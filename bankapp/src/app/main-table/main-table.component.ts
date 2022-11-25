import { Component, OnInit } from '@angular/core';
import { MainTableService } from './main-table.service'; 

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  dataTransaction: any;

  constructor(private _transactionService: MainTableService) { }

  getTransactions() {
    this._transactionService.getTransactions().subscribe((response) => {
       this.dataTransaction = response.movimientos;
      console.log("dataTransaction: ", this.dataTransaction);
    });
  }

  ngOnInit(): void {
    this.getTransactions();
  }

}
