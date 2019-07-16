import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './backend/login/login.component';
import { MainComponent } from './frontend/main/main.component';
import { TodoItemComponent } from './frontend/todo-item/todo-item.component';
import {TodoListComponent} from './frontend/todo-list/todo-list.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'main', component:MainComponent},
  {path:'', redirectTo:'/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [LoginComponent, MainComponent, TodoListComponent, TodoItemComponent ]