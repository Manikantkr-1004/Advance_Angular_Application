import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"profile",component:ProfileComponent, canActivate: [AuthGuard]},
  {path:"cart", component:CartComponent, canActivate: [AuthGuard]},
  {path:"details/:id", component: DetailsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
