import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../types/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {

  @Input() item: Todo;
  @Output() onItemSelect = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) { }

    /**
   * @param item 
   * Remove Item
   */
  remove() {
    this.todoService.deleteItem(this.item.id);
  }

  /**
   * Toggle the state of item if completed or not
   */
  toggleComplete() {
    this.todoService.toggleItemComplete(this.item);
  }

  /**
   * Emit Event to select the item in the Form
   */
  onSelect() {
    this.onItemSelect.emit(this.item);
  }


}
