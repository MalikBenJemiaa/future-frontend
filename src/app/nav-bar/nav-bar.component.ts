import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input ('web_width') web_width:any
  @Input ('web_scrol') web_scrol:any
  screen_scroll:any
  style={
    nav_web1:'',
    nav_web2:'',
    nav_mobile:''
  }
  @HostListener('window:scroll', ['$event2']) 
   doSomething() {
     this.screen_scroll=window.pageYOffset;
     
      this.reglage()
    }
  reglage(){
    if (this.screen_scroll>700){
      this.style.nav_web2='scrol_nav1'
    }
    else if (this.screen_scroll>200){
      this.style.nav_web1='scrol_nav' 
    }
    else{
      this.style.nav_web1=''
      this.style.nav_web2=''
    }
  }
}
