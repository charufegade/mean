import { NgModule } from '@angular/core';
import {
  MdcTopAppBarModule,
  MdcMenuModule,
  MdcCardModule,
  MdcButtonModule,
  MdcElevationModule,
  MdcFormFieldModule,
  MdcTextFieldModule
} from '@angular-mdc/web';

import {
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [
    MdcTopAppBarModule,
    MdcCardModule,
    MdcMenuModule,
    MdcButtonModule,
    MdcElevationModule,
    MdcFormFieldModule,
    MdcTextFieldModule,

    MatTableModule
  ],
})
export class MaterialModule { }
