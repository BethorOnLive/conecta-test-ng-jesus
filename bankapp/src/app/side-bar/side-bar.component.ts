import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SideBarService } from './side-bar.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  closeResult = '';
  dataCards: any;

	constructor(
    private modalService: NgbModal,
    private _cardsService: SideBarService
    ) {}


  getCards() {
    this._cardsService.getCards().subscribe((response) => {
       this.dataCards = response.tarjetas;
      console.log("dataCards: ", this.dataCards);
    });
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}
	
  ngOnInit(): void {
    this.getCards();
  }

}
