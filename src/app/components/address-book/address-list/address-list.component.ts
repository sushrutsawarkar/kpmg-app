import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {

  @Input() addressList : Array<any> = [];
  @Output() selectAddress:EventEmitter<any> = new EventEmitter();
  constructor() { }

  onSelectAddressListItem(item:any){
    this.selectAddress.emit(item);
  }

  ngOnInit(): void {

  }

}
