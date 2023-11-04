import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListProduitComponent,
    AddProduitComponent,
    EditProduitComponent
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule
  ]
})
export class ProduitModule { }
