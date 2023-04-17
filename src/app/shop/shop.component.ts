import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  rrange=[1,2,3,4,5,6,7,8,9,10,11,12,1,1,1,1,1,1,1,1,1,1,,1,1,1]
  wwww=[1,1,1,1,1,1,1,1,1]
  constructor(private router:Router){}
  gotoProduct=()=>{
    this.router.navigate(['/product/1']);

  }
}
