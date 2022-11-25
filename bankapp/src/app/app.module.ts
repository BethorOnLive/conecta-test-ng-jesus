import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MainTableComponent } from './main-table/main-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HeaderService } from './header/header.service';
import { TopSectionService } from './top-section/top-section.service';
import { SideBarService } from './side-bar/side-bar.service';
import { MainTableService } from './main-table/main-table.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopSectionComponent,
    SideBarComponent,
    MainTableComponent,
  ],
  imports: [
    BrowserModule,
    NgxDatatableModule,
    NgbModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClientModule, HeaderService, TopSectionService, SideBarService, MainTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
