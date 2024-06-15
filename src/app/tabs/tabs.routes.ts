import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component:TabsPage,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('../pages/list/list.page').then((p) => p.ListPage),
      },
      {
        path:'',
         pathMatch:'full',
        redirectTo:'list'
      },{
        path:'**',
        redirectTo:'list'
      }
    ],
  },
];
