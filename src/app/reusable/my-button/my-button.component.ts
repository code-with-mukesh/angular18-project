import { Component, EventEmitter, Input, Output,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent implements OnChanges {
  
  @Input() btnName:string='';

  @Input() btnClass:string='';

  @Output() onBtnCick=new EventEmitter<any>();

  onClick(){
    debugger;
    this.onBtnCick.emit('Hello from Pagal');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges()");

  }

}
