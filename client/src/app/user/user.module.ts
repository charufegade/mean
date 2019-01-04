import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
  declarations: [UserComponent, UserAddComponent, UserEditComponent, UserFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
