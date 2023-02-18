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

const routes: Routes = [
  {path:'acceuil',component:AccueilComponent},
  {path:'main',component:MainWorkComponent,children:[
    { path: 'home', component: HomePageComponent },
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
