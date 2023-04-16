import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ShowProComponent } from './show-pro/show-pro.component';
import { ExtraProComponent } from './extra-pro/extra-pro.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MainWorkComponent } from './main-work/main-work.component';
import { LoginComponent } from './login/login.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
// PS when we rout he start search the link from the 1st to the and to when he find it he rander here component
const routes: Routes = [
  {path:'',component:AccueilComponent},
  {path:'login',component:LoginComponent},             
  {path:'',component:MainWorkComponent,children:[
    {path:'otherProduct/:id' ,component:ShowproductComponent},
    {path: 'home', component: HomePageComponent },
    {path:'shop',component:ShopComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
    {path:'product/:id',component:ShowProComponent},
    {path:'extraProduct',component:ExtraProComponent},
  ]}
];
@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
