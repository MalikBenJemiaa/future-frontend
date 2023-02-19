import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-work',
  templateUrl: './main-work.component.html',
  styleUrls: ['./main-work.component.css']
})
export class MainWorkComponent {
  screen_width=window.innerWidth>539
  screen_scroll=0
   @HostListener('window:resize',['$event'])
   onWindowResize(){
    console.log(this.screen_width)
    this.screen_width=window.innerWidth>539
   }
   constructor(private Route:Router ){
    if (this.Route.url=='/main'){
     this.Route.navigateByUrl('/main/home')
    }
   }

}
