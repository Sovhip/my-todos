import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ITodo } from '../todo';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos:ITodo[] = [];
  constructor(private todoServ:TodoService) { }

  ngOnInit() {
    this.todoServ.getTodos().subscribe(r => { this.todos = r})
  }

}
