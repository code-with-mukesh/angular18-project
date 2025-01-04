import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {
  div1BgColor:string='bg-primary';
  isDiv2Active:boolean=false;
  constructor(private router:Router){

  }

  addRedColor(){
    this.div1BgColor="bg-danger";
  }
  addBlueColor(){
    this.div1BgColor="bg-primary";
  }

  toggleDiv2NgClass(){
    this.isDiv2Active=!this.isDiv2Active;
  }
  naviagteToStructural(){
  this.router.navigateByUrl("structural-dir")

  }

}
