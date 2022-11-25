import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MainTableComponent } from './main-table/main-table.component';
import { ModalFormComponent } from './modal-form/modal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopSectionComponent,
    SideBarComponent,
    MainTableComponent,
    ModalFormComponent
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
