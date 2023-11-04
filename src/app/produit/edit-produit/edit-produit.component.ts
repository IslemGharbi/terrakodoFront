import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent {
  productForm: FormGroup;
  editedProduct: any = {};

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]]
    });

    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.productService.getProduct(productId).subscribe(product => {
        this.editedProduct = product;
        this.productForm.patchValue(this.editedProduct);
      });
    });
  }

  updateProduct() {
    if (this.productForm.valid) {
      this.productService.updateProduct(this.editedProduct.id, this.productForm.value).subscribe(() => {
        this.router.navigate(['/produit/list']);
      });
    }
  }
}
