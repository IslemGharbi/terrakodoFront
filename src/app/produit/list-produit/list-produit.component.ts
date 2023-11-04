import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/produit.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent {

  products: any[] = [];
  newProduct: any = {};
  editedProduct: any = {};
  // addProductModal: NgbModalRef | undefined;
  // editProductModal: NgbModalRef | undefined;

  constructor(private productService: ProductService,private authService : AuthServiceService, private router : Router) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

 
  logout() {
    this.authService.logout().subscribe(
      () => {
        console.log('Logout successful');
        this.router.navigate(['/auth/login']);
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }
  addProduct() {
    this.productService.createProduct(this.newProduct).subscribe(() => {
    
      this.getProducts();
    });
  }

  editProduct(product: any) {
    this.editedProduct = { ...product };
  }

  updateProduct() {
    this.productService.updateProduct(this.editedProduct.id, this.editedProduct).subscribe(() => {
   
      this.getProducts();
    });
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.getProducts();
      });
    }
  }

}
