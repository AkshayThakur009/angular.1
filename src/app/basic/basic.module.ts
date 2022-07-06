import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicComponent,

  ],
  imports: [
    CommonModule,
    NgModule,
    FormsModule,
    BasicComponent
  ],
})
export class BasicModule { }

