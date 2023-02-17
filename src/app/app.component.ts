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
   @HostListener('window:resize',['$event'])
   onWindowResize(){
    console.log(this.screen_width)
    this.screen_width=window.innerWidth>539
   }
   
  constructor(){}
  ngOnInit(): void {
    
    
  }
  ngOnDestroy(): void {
    
  }
}
