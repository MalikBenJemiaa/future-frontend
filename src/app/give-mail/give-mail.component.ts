import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-give-mail',
  templateUrl: './give-mail.component.html',
  styleUrls: ['./give-mail.component.css']
})
export class GiveMailComponent {
  screen_width=window.innerWidth>539
  screen_scroll=0
   @HostListener('window:resize',['$event'])
   onWindowResize(){
    // console.log(window.innerWidth)
    this.screen_width=window.innerWidth>608
   }
  
}
