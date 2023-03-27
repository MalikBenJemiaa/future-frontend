import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-random-item',
  templateUrl: './random-item.component.html',
  styleUrls: ['./random-item.component.css']
})
export class RandomItemComponent {
  screen_width=window.innerWidth>539
  screen_scroll=0
  style_acc={
    exist:window.innerWidth>1065,
    // screen_width2:window.innerWidth>601
  }
   @HostListener('window:resize',['$event'])
   onWindowResize(){
    // console.log(this.screen_width)
    console.log(window.innerWidth)
    // this.screen_width=window.innerWidth>1065
    this.style_acc.exist=window.innerWidth>1065
    // this.style_acc.screen_width2=window.innerWidth>601
    // console.log("slmslm")
   }
}
