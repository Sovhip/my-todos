import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private Todo_Url = "/assets/data/todos.json";

// private todos:Todo[];

  constructor(private http:HttpClient) { }

getTodos():Observable <ITodo[]> {
return this.http.get<ITodo[]>(this.Todo_Url)

}



}

