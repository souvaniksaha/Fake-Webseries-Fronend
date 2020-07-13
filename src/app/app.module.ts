import { WebseriesService } from './_service/webseries.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FreeWebseriesComponent } from './free-webseries/free-webseries.component';
import { PaidWebseriesComponent } from './paid-webseries/paid-webseries.component';

@NgModule({
  declarations: [
    AppComponent,
    FreeWebseriesComponent,
    PaidWebseriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [WebseriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
