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
    nav_mobile:'',
    nav_links:'',
  }
  @HostListener('window:scroll', ['$event2']) 
   doSomething() {
    if (this.screen_scroll<window.pageYOffset){
        // console.log("down")
        this.style.nav_web1='scrol_nav1'
        this.style.nav_links=''

      }else{
        // console.log("up")
        this.style.nav_web1=''
    }
     this.screen_scroll=window.pageYOffset;
     
      // this.reglage()
    }
    vsibilityBot=()=>{
      // console.log("hello")
      if (this.style.nav_links==''){
      this.style.nav_links='viClass'
      }else{
        this.style.nav_links=''
      }
    }
    clearli=()=>{
      this.style.nav_links=''

    }
  reglage(){
    if (this.screen_scroll>700){
    }
    else if (this.screen_scroll>200){
      this.style.nav_web1='scrol_nav' 
    }
    else{
      this.style.nav_web1=''
      // this.style.nav_web2=''
    }
  }
}
