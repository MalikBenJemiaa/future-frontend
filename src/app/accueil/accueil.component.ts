import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  @Input ('width') web_width:any
  screen_scroll=0;
  style ={
    nav_web1:"",
    screen_width1:window.innerWidth>900,
    screen_width2:window.innerWidth>601
  }
   @HostListener('window:resize',['$event'])
   onWindowResize(){
    // console.log(this.screen_width)
    this.style.screen_width1=window.innerWidth>900
    this.style.screen_width2=window.innerWidth>601
    // console.log("slmslm")
   }
  
  @HostListener('window:scroll', ['$event2']) 
  doSomething() {
    console.log(this.web_width)
   if (this.screen_scroll<window.pageYOffset){
       this.style.nav_web1='scrol_nav1'
     }else{
       this.style.nav_web1=''
   }
    this.screen_scroll=window.pageYOffset;
    }
}
