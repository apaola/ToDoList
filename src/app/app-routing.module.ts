import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./shared/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./private/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./private/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./private/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./shared/template/template.module').then( m => m.TemplatePageModule)
  },
  {
    path: 'login',
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
