import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Landing } from '../pages/landing/landing';
import { SignIn } from '../pages/sign-in/sign-in';
import { SignUp } from '../pages/sign-up/sign-up';
import { Home } from '../pages/home/home';
import { ArView } from '../pages/ar-view/ar-view';
import { TabNavigation } from 'src/components/tab-navigation/tab-navigation';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: Landing,
    loadChildren: () => import('../pages/landing/landing.module').then(m => m.LandingModule),
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    component: SignIn,
    loadChildren: () => import('../pages/sign-in/sign-in.module').then(m => m.SignInModule)
  },
  {
    path: 'sign-up',
    component: SignUp,
    loadChildren: () => import('../pages/sign-up/sign-up.module').then(m => m.SignUpModule)
  },
  {
    path: '',
    component:TabNavigation,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'ar-view',
        loadChildren: () => import('../pages/ar-view/ar-view.module').then(m => m.ArViewModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
