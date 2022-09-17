import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ErrorService } from 'src/app/services/error.service';
import { ProductModel } from './model/product-model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:ProductModel[]=[];
  filterText:string="";
  constructor(
    private productService:ProductService,
    private errorService:ErrorService,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.productService.getList().subscribe((res:any)=>{
      this.products=res.data;
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }
  delete(product:ProductModel){
    this.productService.delete(product).subscribe((res:any)=>{
      this.toastr.info(res.message);
      this.getList();
    },(err)=>{
      this.errorService.errorHandler(err);
    });
  }
}
