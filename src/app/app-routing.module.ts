import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

  {
    path: 'auth',
    
    loadChildren: () =>
      import('./auth-module/auth-module.module').then((m) => m.AuthModuleModule),
  },
  {
    path: 'produit',
    // canActivate: [AuthGuard],

    loadChildren: () =>
      import('./produit/produit.module').then((m) => m.ProduitModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
