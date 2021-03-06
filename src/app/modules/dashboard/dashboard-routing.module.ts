import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { DashboardComponent } from './dashboard.component';

export const dashboardRouting: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../solicite-card/solicite-card.module').then((m) => m.SoliciteCardModule),
      },
    ],
  },
 
];
