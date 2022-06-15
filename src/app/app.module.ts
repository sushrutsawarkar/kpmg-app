import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { AddressListComponent } from './components/address-book/address-list/address-list.component';
import { AddressFormComponent } from './components/address-book/address-form/address-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddressListComponent,
    AddressFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
