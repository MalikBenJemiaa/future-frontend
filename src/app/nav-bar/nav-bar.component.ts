import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Input ('web_width') web_width:any
  @Input ('web_scrol') web_scrol:any
  screen_scroll=0
  style={
    nav_web1:'',
    nav_mobile:'',
    // nav_mobilea0:'',
    nav_links:'',
    bar1:'',
    bar2:'',
    bar3:'',
    text:true,
  }
  @HostListener('window:scroll', ['$event2']) 
   doSomething() {
     if(this.style.text){

       
       if (this.screen_scroll<window.pageYOffset ){
        //  console.log("down")
         this.style.nav_web1='scrol_nav1'
         this.style.nav_links=''
        
      }else{
        // console.log("up")
        this.style.nav_web1=''
      }
      // console.log(this.screen_scroll)
      // if(this.screen_scroll==0){
      //     this.style.nav_mobilea0=''
      //   }else{
      //     this.style.nav_mobilea0='nav-moa0'
          
      // }
    }
    
     this.screen_scroll=window.pageYOffset;
    //  console.log(window.pageYOffset)
      // this.reglage()
    }
    
    clearli=()=>{
      this.style.nav_links=''
      this.vsibilityBot()

    }
    clearli1=()=>{
      this.style.nav_links=''
      // this.vsibilityBot()

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
  vsibilityBot=()=>{
    // console.log("hello")
    if (this.style.bar1==''){
    this.style.nav_links='viClass'
    this.style.bar1='la1'
    this.style.bar2='la2'
    this.style.bar3='la3'
    this.style.text=false
  }else{
    this.style.nav_links=''
    this.style.bar1=''
    this.style.bar2=''
    this.style.bar3=''
    this.style.text=true
    }
  }
}
