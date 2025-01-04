import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  isDiv1Visible:boolean=true;
  isToggleDiv2Visible:boolean=false;

  selectedStatus:string='';
  num1:string='';
  num2:string='';

  hideDiv1(){
    this.isDiv1Visible=false;
  }

  showDiv1(){
    this.isDiv1Visible=true;
  }

toggleDiv2(){
  this.isToggleDiv2Visible=!this.isToggleDiv2Visible;
}
}
