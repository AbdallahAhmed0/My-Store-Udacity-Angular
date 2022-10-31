import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  
  
  myForm!: FormGroup;
  submitted = false;
  @Output() userInfo = new EventEmitter();

  constructor() { 

  }
  

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(6)]),
      creditCard: new FormControl('', [Validators.required, Validators.minLength(16),Validators.maxLength(16)])
    })

  }
  onSubmit() {
    this.userInfo.emit(this.myForm.value);
    
  }
  get name() {
    return this.myForm.get('name');
  }
  get address() {
    return this.myForm.get('address');
  }
  get creditCard() {
    return this.myForm.get('creditCard');
  }

}
