import { Component } from '@angular/core';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent {
 a=["capp.jpg","pieceF.png","_tran.jpg","sac.jpg"];
 proncipal=this.a[0];
 changemain=(i:any)=>{
  this.proncipal=this.a[i]
 }
}
