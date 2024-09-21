import { Component, inject ,OnInit} from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/role';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,UpperCasePipe,DatePipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObject: Client = new Client();
  clientList: Client[] = [];

  currentDate=new Date();
  clientService=inject(ClientService);

  ngOnInit(): void {
    this.loadClientData();
  }
  
  loadClientData(){
    this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
      this.clientList=res.data;
    })

  }

  onSaveClient(){
    debugger;
    this.clientService.addUpdateClient(this.clientObject).subscribe((res:APIResponseModel)=>{
      if(res.data){
        alert("Client Created Sucessfully");
        this.loadClientData();
        this.clientObject=new Client();
      }else{
        alert(res.message);
      }
    })

  }
  onEdit(data:Client){
    this.clientObject=data;
  }
  onReset(){
    this.clientObject=new Client();
  }

  onDelete(id:number){
    const isdeleted=confirm("Are you sure u want to delete");
    if(isdeleted){
      this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
        if(res.data){
          alert("Client Deleted Sucessfully");
          this.loadClientData();
        }else{
          alert(res.message);
        }
      })
    }
    
  }

}
