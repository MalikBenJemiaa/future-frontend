import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  style={
    main_background:""
  }
  screen_width=window.innerWidth>539
   @HostListener('window:resize',['$event'])
   onWindowResize(){
    // console.log(this.screen_width)
    this.screen_width=window.innerWidth>539
    if (!this.screen_width){
      this.style.main_background="background-modile"
    }else{
      this.style.main_background=""

    }
   }
   constructor(){
    this.onWindowResize()
   }
}
