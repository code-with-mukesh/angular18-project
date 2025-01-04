import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //string , number, date, boolean
  courseName:string="Angular 18";
  inputType="checkbox";

  myClassName="bg-primary";
 isIndian=false;
  rollNumber=123;
  firstName=signal("Mukesh Kumar");
  constructor(){

  }
  changeCourrseName(){
    this.courseName="React Js";
    this.firstName.set("Mahesh Kumar");
  }

  showMessage(message:string){
    alert(message);
  }

}
