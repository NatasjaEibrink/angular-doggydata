import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LitterOverviewComponent} from './components/litter-overview/litter-overview.component';
import {RegisterLitterComponent} from './components/register-litter/register-litter.component';
import {DogDetailsComponent} from './components/dog-details/dog-details.component';
import {ShowresultatenComponent} from './components/showresultaten/showresultaten.component';
import {HealthtestresultsComponent} from './components/healthtestresults/healthtestresults.component';

const routes: Routes = [
  {path: 'litters', component: LitterOverviewComponent},
  {path: 'litters/add', component: RegisterLitterComponent},
  {path: "dogs/:id", component: DogDetailsComponent },
  {path: "showresultaten/:id", component: ShowresultatenComponent },
  {path: 'gezondheidstesten/:id', component: HealthtestresultsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
