import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './postapi.component.html',
  styleUrl: './postapi.component.css'
})
export class PostapiComponent {
  deptObj: any = {
    'departmentId': 0,
    'departmentName': '',
    'departmentLogo': ''
  }

  deptList: any[] = [];

  http = inject(HttpClient);
  constructor() {
    this.getAllDept();
  }

  onEdit(data: any) {
    this.deptObj = data;
  }
  getAllDept() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result: any) => {
      this.deptList = result.data;
    },error=>{
    })
  }

  onSave() {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.deptObj).subscribe((res: any) => {
      if (res.result) {
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
          alert("Department has been deleted");
          this.getAllDept();
        } else {
          alert(res.message);
        }
      })
    }
  }

}
