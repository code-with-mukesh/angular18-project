import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../reusable/alert/alert.component';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.css'
})
export class GetapiComponent {
  userList:any[]=[];
  consumerList:any []=[];

  constructor(private http:HttpClient){
    this.getAlluser();
    this.getAllconsumer();
  }

  getAlluser(){
    debugger;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      debugger;
      this.userList=res;
    },error=>{
      debugger;
    })
  }

  getAllconsumer(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers/").subscribe((res:any)=>{
      debugger;
      this.consumerList=res.data;
    })
  }

}
