import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
userLoggedIn:boolean=false;
userName:string='Mukesh';

@ViewChild('dynamicTemp') dynamicTemplate:TemplateRef<any> | undefined;

@ViewChild('dynamicContainer',{read:ViewContainerRef}) dynamicContainer:ViewContainerRef|undefined;


onLoadTemplate(){
  if(this.dynamicTemplate){
    this.dynamicContainer?.createEmbeddedView(this.dynamicTemplate);
  }
}
}
