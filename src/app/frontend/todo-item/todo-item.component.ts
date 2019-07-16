import { Component, OnInit, Input } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  // selector: 'app-todo-item',
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo:ITodo;

  constructor() { }

  ngOnInit() {
  }

}
