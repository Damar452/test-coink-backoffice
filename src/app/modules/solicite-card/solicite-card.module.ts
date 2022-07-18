import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoliciteCardComponent } from './solicite-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { SoliciteCardPageRoutingModule } from './solicite-card.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SoliciteCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    SoliciteCardPageRoutingModule
  ]
})
export class SoliciteCardModule { }
