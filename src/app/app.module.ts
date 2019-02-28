import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HelloComponent } from 'src/app/hello/hello.component';
import { TopicComponent } from './topic/topic.component';
import { ContactComponent } from './contact/contact.component';
import { HelloService } from 'src/app/hello/hello.service';
import { ContactService } from 'src/app/contact/contact.service';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { CalcComponent } from './calc/calc.component';
import { ContactdetailsComponent } from './contactdetails/contactdetails.component';

const routs:Routes=[
  {path:'',component:HomeComponent, pathMatch:'full'},
  {path:'hello',component:HelloComponent, },
  {path:'topic',component:TopicComponent, },
  {path:'contact',component:ContactComponent, },
  {path:'contactdetails/:nm',component:ContactdetailsComponent, },
  
  {path:'**',component:PagenotfoundComponent, }
]

@NgModule({
  declarations: [
    AppComponent,HelloComponent, TopicComponent, ContactComponent, HomeComponent, PagenotfoundComponent, HeaderComponent, BannerComponent, CalcComponent, ContactdetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routs)
  ],
  providers: [HelloService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
