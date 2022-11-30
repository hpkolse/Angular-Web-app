import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
// import { accessoriesData  } from 'src/app/data/accessories.content.json';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  getProductData(productType: string): Observable<string[]> {
    if(productType === 'accessories'){
      return this.http.get<string[]>('assets/products/accessories.content.json');
    }

    else if(productType === 'clothes'){
      return this.http.get<string[]>('assets/products/clothes.content.json');
    }
    else if(productType === 'electronics'){
      return this.http.get<string[]>('assets/products/electronics.content.json');
    }

    return of([] as string[]);
  }
}
