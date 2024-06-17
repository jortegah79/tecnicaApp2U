import { Routes } from '@angular/router';


export const routes: Routes = [
{
  path:'',
  children:[
    {
      path:'tabs',
      loadChildren:()=>import('./tabs/tabs.routes').then(r=>r.routes)
    },
    {
      path:'event/:id',
      loadComponent:()=>import('./pages/event/event.page').then(p=>p.EventPage)
    },
    {
      path:'',
      pathMatch:'full',
      redirectTo:'tabs'
    },{
      path:'**',
      redirectTo:'tabs'
    }

  ]
}];

