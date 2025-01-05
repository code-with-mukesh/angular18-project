import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {

  studentForm:FormGroup=new FormGroup({
    firstName:new FormControl("Mukesh",[Validators.required,Validators.minLength(5)]),
    lastName:new FormControl(),
    userName:new FormControl(),
    state:new FormControl(),
    city:new FormControl(),
    zipCode:new FormControl(),
    isAcceptTerms:new FormControl()
  });

  formValue:any;

  onSubmit(){
    debugger;
    this.formValue=this.studentForm.value;
  }
  resetForm(){

  }

}
