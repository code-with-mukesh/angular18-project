import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { IfElseComponent } from './components/controlflow/if-else/if-else.component';
import { ForComponent } from './components/controlflow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { GetapiComponent } from './components/api-integration/getapi/getapi.component';
import { PostapiComponent } from './components/api-integration/postapi/postapi.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirectiveComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path:'if-else',
        component:IfElseComponent
    },
    {
        path:'for',
        component:ForComponent
    },
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'template',
        component:TemplateComponent
    },
    {
        path:'reactive',
        component:ReactiveComponent
    },
    {
        path:'getapi',
        component:GetapiComponent
    },
    {
        path:'postapi',
        component:PostapiComponent
    }
];
