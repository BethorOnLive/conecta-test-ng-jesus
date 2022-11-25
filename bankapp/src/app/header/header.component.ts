import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dataCount : any

  constructor(private _countsService: HeaderService) { }

  getCount() {
    this._countsService.getCount().subscribe((response) => {
       this.dataCount = response.cuenta;
      console.log("dataCount: ", this.dataCount);
    });
  }

  ngOnInit(): void {
    this.getCount();
  }

}
