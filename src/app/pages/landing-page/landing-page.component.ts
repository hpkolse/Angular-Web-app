import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  landingPageData = [];
  constructor(private productDataService: ProductDataService, private route: ActivatedRoute) { }

  productType = ''; 

  ngOnInit(): void {
    this.getRouteData();
  }

  getRouteData() {
    this.route.queryParams.subscribe(
      params => {
        this.productType =  params['productType'];
        this.fetchProductData();
      }
    )
  }

  fetchProductData() {
    this.productDataService.getProductData(this.productType).subscribe((data: any) => this.landingPageData = data,
     (error: any) => console.log(error));
  }

}
