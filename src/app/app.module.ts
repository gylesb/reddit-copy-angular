import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HotComponent } from './hot/hot.component';
import { NewComponent } from './new/new.component';
import { RisingComponent } from './rising/rising.component';
import { ControversialComponent } from './controversial/controversial.component';
import { TopComponent } from './top/top.component';
import { GildedComponent } from './gilded/gilded.component';
import { WikiComponent } from './wiki/wiki.component';
import { routing } from './app.routing';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HotComponent,
    NewComponent,
    RisingComponent,
    ControversialComponent,
    TopComponent,
    GildedComponent,
    WikiComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
