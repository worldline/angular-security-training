import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { ContactService } from '../services/contactService';

function containsValidCharacters(c: FormControl) {
  let specialChars = ['\\', '<', '>', '&'];

  for (let i in specialChars) {
    if (c.value !== undefined && c.value.indexOf(specialChars[i]) != -1) {
      return { containsValidCharacters: true };
    }
  }
  return null;
}

@Component({
  selector: 'contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css'],
})
export class Contact {
  email: string;
  phone: string;
  address: string;

  message: string = '';

  _formGroup = this.fb.group({
    message: new FormControl(
      '',
      Validators.compose([Validators.required, containsValidCharacters])
    ),
  });

  constructor(contactService: ContactService, private fb: FormBuilder) {
    this.email = contactService.email;
    this.phone = contactService.phone;
    this.address = contactService.address;
  }

  get formGroup() {
    return this._formGroup;
  }

  updateMessage(data: any) {
    this.message = data.target.value;
  }

  sendMessage() {
    this.message = '';
  }
}
