import { Component, OnDestroy, OnInit,HostListener } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { MediaChange ,MediaObserver } from '@angular/flex-layout';
// import { window } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'future-frontend';
  screen_width=window.innerWidth>539
  screen_scroll=0
  style_acc={
    screen_width1:window.innerWidth>900,
    screen_width2:window.innerWidth>601
  }
   @HostListener('window:resize',['$event'])
   onWindowResize(){
    // console.log(this.screen_width)
    this.screen_width=window.innerWidth>539
    this.style_acc.screen_width1=window.innerWidth>900
    this.style_acc.screen_width2=window.innerWidth>601
    // console.log("slmslm")
   }
   
  constructor(){}
  ngOnInit(): void {
    
    
  }
  ngOnDestroy(): void {
    
  }
}
