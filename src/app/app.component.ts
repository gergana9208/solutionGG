import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { ProductCardComponent } from './product-card/product-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductFormComponent, ProductCardComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'junior-technical-assesment';
  selectedProduct?: Product;
  products: Product[] = [];
  isLoading = false;
  errorMessage: string | null = null; 

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts(): void {
    this.isLoading = true;
    this.errorMessage = null;
    this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (error: any) => {
        this.errorMessage = 'Error loading products. Please try again later.';
        console.error('Error loading products:', error);
        this.isLoading = false;
      }
    });
  }

  onSaveProduct(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): void {
    this.errorMessage = null;
  
    if (this.selectedProduct) {
      // Update existing product
      this.productService.updateProduct(this.selectedProduct.id, productData).subscribe({
        next: () => {
          this.loadProducts();
          this.selectedProduct = undefined; // Reset only on success
        },
        error: (error: any) => {
          this.errorMessage = 'Failed to update product. Please fix the errors and try again.';
          console.error('Error updating product:', error);
        }
      });
    } else {
      // Create new product
      this.productService.createProduct(productData).subscribe({
        next: () => {
          this.loadProducts();
        },
        error: (error: any) => {
          this.errorMessage = 'Failed to create product. Please fix the errors and try again.';
          console.error('Error creating product:', error);
        }
      });
    }
  } 
  onEditProduct(product: Product): void {
    this.selectedProduct = product;
  }

  onDeleteProduct(product: Product): void {
    this.productService.deleteProduct(product.id).subscribe({
      next: (success: any) => {
        if (success) {
          this.loadProducts();
        }
      },
      error: (error: any) => console.error('Error deleting product:', error)
    });
  }

  onCancelForm(): void {
    this.selectedProduct = undefined;
  }
}
