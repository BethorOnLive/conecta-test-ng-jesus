import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SideBarService } from './side-bar.service'
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  closeResult = '';
  dataCards: any;
  hello = 'hola gola';
  form: FormGroup;

	constructor(
    private modalService: NgbModal,
    private _cardsService: SideBarService,
    private formBuilder: FormBuilder
    ) {
      this.buildForm();
    }

    private buildForm() {
      this.form = this.formBuilder.group({
        cardNumber: [''],
        count: [''],
        issuer: [''],
        cardName: [''],
        mark: [''],
        status: [''],
        balance: [''],
        kindOfCount: ['']
      });
    }

  saveForm(){
    const dataForm = this.form.value; 
    console.log("dataForm: ", dataForm);
    this.ConfirmTextOpen(dataForm);

  }

  thishello(){
    console.log("this.form.value:");
  }

  getCards() {
    this._cardsService.getCards().subscribe((response) => {
       this.dataCards = response.tarjetas;
      console.log("dataCards: ", this.dataCards);
    });
  }

  openLg(content: any) {
		this.modalService.open(content, { size: 'lg' });
	}

  ConfirmTextOpen(dataForm:any){
    let $this = this;
    const dataFields = JSON.stringify(dataForm);
    
    Swal.fire({
      title: '¿La información es correcta?',
      text: dataFields,
      icon: 'warning',
      
      confirmButtonColor: '#07BE92',
      confirmButtonText: ' Sí, es correcta ',
      customClass: {
        confirmButton: 'btn btn-primary',
      }
    }).then(function (result) {
      if (result.value) {
        Swal.fire({
          icon: 'success',
          title: '¡Gracias!',
          text: 'Recibimos tu información correctamente',
          customClass: {
            confirmButton: 'btn btn-success'
          }
        });
      }
    });
  }
	
  ngOnInit(): void {
    this.getCards();

    /*this.form.valueChanges
    .subscribe(value => {
      console.log(value);
    })*/
  }

}
