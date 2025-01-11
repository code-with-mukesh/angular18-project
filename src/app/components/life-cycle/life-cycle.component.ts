import { Component,OnInit,DoCheck,AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {
  firstName:string;
  constructor(){
    this.firstName="Mukesh";
    console.log("constructor()");
  }
  
  
  ngOnInit(): void {
    console.log("ngOnInit()");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck()");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit()");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked()");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit()");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked()");
  
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy()");

  }
}
