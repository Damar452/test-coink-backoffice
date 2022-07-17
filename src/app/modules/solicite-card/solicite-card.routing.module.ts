import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoliciteCardComponent } from './solicite-card.component';

const routes: Routes = [
  {
    path: 'solicite-card',
    component: SoliciteCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoliciteCardPageRoutingModule {}