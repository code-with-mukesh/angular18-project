import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentserviceService } from '../../../services/departmentservice.service';
import { AlertComponent } from '../../../reusable/alert/alert.component';
import { MyButtonComponent } from '../../../reusable/my-button/my-button.component';

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [FormsModule,AlertComponent,MyButtonComponent],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent {
  deptObj: any = {
    'departmentId': 0,
    'departmentName': '',
    'departmentLogo': '',
  }

  deptList: any[] = [];

  http = inject(HttpClient);
  constructor(private deptSrv:DepartmentserviceService) {
    this.getAllDept();
  }

  onEdit(data: any) {
    this.deptObj = data;
  }
  // getAllDept() {
  //   debugger;
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result: any) => {
  //     this.deptList = result.data;
  //     debugger;
  //   },error=>{
  //   })
  // }

  getAllDept(){
    debugger;
    this.deptSrv.getAllDept().subscribe((res:any)=>{
      this.deptList=res.data;
    })
  }

  // onSave() {
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
  //     if (res.result) {
  //       this.getAllDept();
  //       alert("New Department Added");
  //     } else {
  //       alert(res.message);
  //     }
  //   })
  // }
  onSave(){
    this.deptSrv.OnSavenewDepartment(this.deptObj).subscribe((res:any)=>{
      if (res.result) {
        debugger;
              this.getAllDept();
              alert("New Department Added");
            } else {
              alert(res.message);
            }
    })
    }

  onUpdate() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
      if (res.result) {
        this.getAllDept();
        alert(" Department Updated");
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("are you sure want to delete");
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
        if (res.result) {
          debugger;
          alert("Department has been deleted");
          this.getAllDept();
        } else {
          alert(res.message);
        }
      })
    }
  }

  getData(data:any){
debugger;
  }

}
