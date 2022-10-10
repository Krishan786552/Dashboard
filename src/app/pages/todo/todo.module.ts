import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';


import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from 'src/app/core/shared/share.module';
import { TodoListComponent } from './todo-list.component';

const routes: Routes = [
  {
      path: '',
      component: TodoListComponent

  },

];


@NgModule({
  declarations: [
    AddEditItemComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [CommonModule,RouterModule.forChild(routes),SharedModule],
    exports: [RouterModule]
})
export class TodoModule { }
