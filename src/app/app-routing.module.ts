import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)},
  {path: 'games', loadChildren: () => import('./game/game.module').then(module => module.GameModule)},
  {path: '', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)},
  {path: '**', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
