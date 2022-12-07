import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ImportProductService } from 'src/app/services/import-product.service';

@Component({
  selector: 'app-import-product-dailog',
  templateUrl: './import-product-dailog.component.html',
  styleUrls: ['./import-product-dailog.component.css']
})
export class ImportProductDailogComponent {
  constructor(public openDailogService:ImportProductService,private appService: AppService){}  

  ngOnInit() {
    this.appService.setTitle('Products');
  }

}
