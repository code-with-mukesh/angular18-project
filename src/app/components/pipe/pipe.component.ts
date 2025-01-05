import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,DatePipe,JsonPipe,AsyncPipe,NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstName:string="Mukesh is cooking today.";
  currentDate:Date=new Date();
  student:any={
    name:'Mukesh',
    city:'Kharar',
    empid:234,
    state:null
  }
  currentTime:Observable<Date>=new Observable<Date>();
  constructor(){
    this.currentTime=interval(1000).pipe(map(()=>new Date));
  }
}


