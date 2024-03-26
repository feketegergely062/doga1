import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiberyComponent } from './libery/libery.component';
import { HomeComponent } from './home/home.component';
import { KolcsonzesekComponent } from './kolcsonzesek/kolcsonzesek.component';
import { KolcsonzokComponent } from './kolcsonzok/kolcsonzok.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'libery', component:LiberyComponent},
  {path:'kolcsonzesek', component:KolcsonzesekComponent},
  {path:'kolcsonzok', component:KolcsonzokComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
