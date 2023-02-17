import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent {
  screen_width=window.innerWidth>539
  stylee={
    title:"",
    des:"",
    bot:"",
    img_cadre:""
  }
  @HostListener('window:resize',['$event'])
  onWindowResize(){
   console.log(this.screen_width)
   this.screen_width=window.innerWidth>539
   this.checkSize()
  }
  checkSize=()=>{
    if (this.screen_width){
      this.stylee.title=""
      this.stylee.des=""
      this.stylee.bot=""
      this.stylee.img_cadre=""
    }else{
      this.stylee.title="title-title-create-product-mobile"
      this.stylee.des="des-title-create-product-mobile"
      this.stylee.bot="order-button-mobile"
      this.stylee.img_cadre="item-pr-mobile"

    }
  }
  constructor(){
    this.checkSize()
  }


}
