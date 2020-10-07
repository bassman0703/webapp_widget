import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  value?: string;
  suffixTemplateInfo: any;
  validateForm: any;


  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],

    });
  }

  submitForm(): void {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
}
