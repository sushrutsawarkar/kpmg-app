import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss'],
})
export class AddressBookComponent implements OnInit {
  selectedAddress = {};
  addressList = [
    {
      name: 'Jhon Mathew',
      address: '123, XYZ, New Town',
      email: 'jhon.mathew@email.com',
      phone: '1234567890',
    },
    {
      name: 'Hanna H',
      address: '123, XYZ, Old Town',
      email: 'hanna@email.com',
      phone: '9876543210',
    },
  ];
  constructor(private formBuilder: FormBuilder) {}

  onAddressSelected(address: any) {
    this.selectedAddress = address;
  }
  onAddressAdded(address: any) {
    this.addressList.push(address);
    this.selectedAddress={};
  }

  ngOnInit() {}
}
