import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'AboutUs', component:AboutUsComponent },
  { path: 'Services', component:ServicesComponent },
  { path: 'ContactUs', component:ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  AboutUsComponent,ServicesComponent,ContactUsComponent
]
