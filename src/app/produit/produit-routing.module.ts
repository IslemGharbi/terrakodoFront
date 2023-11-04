import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

const routes: Routes = [

  {
    path: 'list',
     component: ListProduitComponent
    
  },
  {
    path: 'edit/:id',
     component: EditProduitComponent
    
  },

  {
    path: 'add',
     component: AddProduitComponent
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
