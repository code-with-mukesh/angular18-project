import { HttpClient } from '@angular/common/http';
import { Component ,inject,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APIResponseModel, IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList:IRole []=[];
  http=inject(HttpClient);
  
  ngOnInit(): void {
    this.getAllRoles();

  }

  getAllRoles(){
   this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel)=>{
    this.roleList=res.data;
   })
  }











  /* //string
  firstName:string="Angular Tutorial";
  angularVersion="version 18";
  //number
  version:number=18;
  //boolean
  isActive:boolean=false;
  //Date
  currentDate:Date=new Date();

  inputtype:string="checkbox";

  selectedState:string=' ';

showWelcomeAlert(){
alert("welcome to Angular");
}

showWelcomeMessage(message:string){
alert(message);
}
 */
}