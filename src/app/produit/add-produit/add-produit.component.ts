import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {


  productForm: FormGroup;

  constructor(private productService: ProductService, private router: Router, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  addProduct() {
    if (this.productForm.valid) {
      this.productService.createProduct(this.productForm.value).subscribe(() => {
        this.router.navigate(['/produit/list']);
      });
    }
  }
}
