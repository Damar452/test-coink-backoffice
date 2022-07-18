import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultInputComponent } from './default-input/default-input.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { ModalContentsComponent } from './modal-contents/modal-contents.component';

@NgModule({
  declarations: [
    DefaultInputComponent,
    SidebarComponent,
    HeaderComponent,
    CustomTableComponent,
    AccordionComponent,
    ModalFormComponent,
    ModalContentsComponent
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
    AccordionComponent,
    ModalFormComponent,
    ModalContentsComponent
  ]
})
export class SharedModule { }
