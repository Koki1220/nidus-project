import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ImportProductService } from 'src/app/services/import-product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public openDailogService:ImportProductService,private appService: AppService){}
  title!: String;


  ngOnInit() {
    this.appService.getTitle().subscribe(appTitle => this.title = appTitle);
  }

}
