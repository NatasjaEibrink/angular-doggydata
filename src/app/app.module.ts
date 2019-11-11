import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { LitterOverviewComponent } from './components/litter-overview/litter-overview.component';
import { RegisterLitterComponent } from './components/register-litter/register-litter.component';
import { HeaderComponent } from './components/header/header.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DogDetailsComponent } from './components/dog-details/dog-details.component';
import { ShowresultatenComponent } from './components/showresultaten/showresultaten.component';
import { HealthtestresultsComponent } from './components/healthtestresults/healthtestresults.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LitterOverviewComponent,
    RegisterLitterComponent,
    HeaderComponent,
    DogDetailsComponent,
    ShowresultatenComponent,
    HealthtestresultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
