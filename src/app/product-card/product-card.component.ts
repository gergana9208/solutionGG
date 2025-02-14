import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  imports: [CommonModule]
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  ngOnInit() {
    if (this.product?.updatedAt && typeof this.product.updatedAt === 'string') {
      this.product.updatedAt = new Date(this.product.updatedAt);
    }
  }

  getFormattedDate(): string {
    return this.product?.updatedAt ? this.product.updatedAt.toLocaleDateString() : 'N/A';
  }

  editProduct() {
    this.edit.emit();
  }

  deleteProduct() {
    this.delete.emit();
  }
}