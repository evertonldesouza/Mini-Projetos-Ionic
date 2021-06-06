import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercicio2',
    loadChildren: () => import('./exercicio2/exercicio2.module').then( m => m.Exercicio2PageModule)
  },
  {
    path: 'exercicio3',
    loadChildren: () => import('./exercicio3/exercicio3.module').then( m => m.Exercicio3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
