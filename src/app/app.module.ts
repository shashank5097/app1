import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from 'src/app/hello/hello.component';
import { TopicComponent } from './topic/topic.component';
import { ContactComponent } from './contact/contact.component';
import { HelloService } from 'src/app/hello/hello.service';
import { ContactService } from 'src/app/contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,HelloComponent, TopicComponent, ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelloService],
  bootstrap: [AppComponent]
})
export class AppModule { }
