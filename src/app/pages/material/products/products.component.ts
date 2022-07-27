import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from '../../../services/product/product.service';
import { IProduct } from '../../../shared/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  private subscription = new Subscription();
  products: IProduct[] = [];
  productsBackUp: IProduct[] = [];
  filter = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getProducts() {
    this.subscription.add(
      this.productService.getProducts().subscribe({
        next: (products) => {
          this.products = products.products;
          this.productsBackUp = products.products;
        }
      })
    );
  }

  handleBrandFilter(brand: string) {
    if (!brand) this.products = this.productsBackUp;

    const productsFiltered = this.products.filter(p => p.brand.toLocaleLowerCase() === brand.toLocaleLowerCase());
    if (productsFiltered.length) {
      this.products = productsFiltered;
    }
  }

}
