import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { SharedModule } from '../shared.module.';

@NgModule({
  declarations: [
    TaskComponent,
    TaskAddComponent,
    TaskEditComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    SharedModule,
  ]
})
export class TaskModule { }
