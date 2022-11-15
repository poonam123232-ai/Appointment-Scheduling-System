import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { TrackComponent } from './track/track.component';
import { LoginGuard } from './login.guard';
//import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

  {path:'home',component:HomepageComponent},

  {path:'book',canActivate:[LoginGuard],component:BookComponent},

  {path:'about',component:AboutComponent},

  {path:'contact',component:ContactComponent},

  {path:'login',component:LoginComponent},

  {path:'registration',component:RegistrationComponent},

  {path:'track',component:TrackComponent},
  
  //{path: 'footer', component:FooterComponent},

  {path:'**', redirectTo:'/home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

