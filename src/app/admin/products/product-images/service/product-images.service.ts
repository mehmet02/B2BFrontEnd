import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProductImageModel } from '../model/product-image-model';

@Injectable({
  providedIn: 'root'
})
export class ProductImagesService {

  constructor(
    @Inject("apiUrl") private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  add(fromData:any){
    let api=this.apiUrl+"ProductImages/Add";
    return this.httpClient.post(api,fromData);
  }

  delete(productImage:ProductImageModel){
    let api=this.apiUrl+"ProductImages/Delete";
    return this.httpClient.post(api,productImage);
  }

  getList(productId:number){
    let api=this.apiUrl+"ProductImages/GetListByProductId/"+productId;
    return this.httpClient.get(api);
  }

  setMainImage(id:number){
    let api=this.apiUrl+"ProductImages/SetMainImage/"+id;
    return this.httpClient.get(api);
  }
}
