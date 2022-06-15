import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
})
export class AddressFormComponent implements OnInit, OnChanges {
  @Input() selectedAddress: any = {};
  @Output() newAddress: EventEmitter<any> = new EventEmitter();
  userForm: any = FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {}

  get formValues() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }
    this.newAddress.emit(this.userForm.getRawValue());
  }
  setFormValues() {
    if (this.userForm?.controls) {
      this.userForm.get('name').setValue(this.selectedAddress?.name);
      this.userForm.get('phone').setValue(this.selectedAddress?.phone);
      this.userForm.get('email').setValue(this.selectedAddress?.email);
      this.userForm.get('address').setValue(this.selectedAddress?.address);
    }
  }

  ngOnChanges(): void {
    if (this.selectedAddress) {
      this.setFormValues();
    }
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address: ['', []],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
