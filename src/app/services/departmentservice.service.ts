import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentserviceService {

  constructor(private http:HttpClient) { }

  getAllDept(){
    return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment");
  }

  OnSavenewDepartment(obj:any){
    debugger;
    return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",obj);
  }
}
