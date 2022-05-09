import { FormService } from './../../service/form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public enabled: boolean = false;
  public form = this.fb.group({
    company: ['', Validators.required],
    myToken: ['', Validators.required],
    symbol: ['', Validators.required],
    max: ['', Validators.required],
    blockchain: ['', Validators.required],
    supply: ['', Validators.required],
  });
  public selectedValue: string = "Enthereum";


  constructor(private fb: FormBuilder, public formService: FormService) {}

  ngOnInit(): void {}

  get company() {
    return this.form.get('company')!;
  }

  get myToken() {
    return this.form.get('myToken')!;
  }

  get symbol() {
    return this.form.get('symbol')!;
  }

  get max() {
    return this.form.get('max')!;
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.value;
    }
  }
}
