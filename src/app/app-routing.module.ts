import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanLoad } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./shared/tabs/tabs.module').then(m => m.TabsPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./private/list/list.module').then( m => m.ListPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: () => import('./private/list/list.module').then( m => m.ListPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'add',
    loadChildren: () => import('./private/add/add.module').then( m => m.AddPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./private/profile/profile.module').then( m => m.ProfilePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'templates',
    loadChildren: () => import('./shared/template/template.module').then( m => m.TemplatePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./public/register/register.module').then( m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
