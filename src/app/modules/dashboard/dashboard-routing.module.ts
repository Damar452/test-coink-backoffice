import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRouting: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../solicite-card/solicite-card.module').then((m) => m.SoliciteCardModule),
      },
    ],
  },
 
];
