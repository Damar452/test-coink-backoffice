import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultInputComponent } from './default-input/default-input.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { AccordionComponent } from './accordion/accordion.component';



@NgModule({
  declarations: [
    DefaultInputComponent,
    SidebarComponent,
    HeaderComponent,
    CustomTableComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    DefaultInputComponent,
    SidebarComponent,
    HeaderComponent,
    CustomTableComponent,
    AccordionComponent
  ]
})
export class SharedModule { }
