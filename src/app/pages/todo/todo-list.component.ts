import { Component, OnInit } from '@angular/core';
import { TodoService } from './service/todo.service';
import { Todo } from './types/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})
export class TodoListComponent implements OnInit {
  selectedItem: Todo;
  constructor(public todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodo();
  }

  /**
   * @param item 
   * On Selecting todo item
   */
  onSelect(item: Todo) {
    this.selectedItem = {...item};
  }



}
