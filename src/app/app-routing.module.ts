import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LitterOverviewComponent} from './components/litter-overview/litter-overview.component';
import {RegisterLitterComponent} from './components/register-litter/register-litter.component';
import {DogDetailsComponent} from './components/dog-details/dog-details.component';
import {ShowresultatenComponent} from './components/showresultaten/showresultaten.component';
import {HealthtestresultsComponent} from './components/healthtestresults/healthtestresults.component';
import {PuppydataComponent} from './components/puppydata/puppydata.component';
import {RegisterPuppyWeightComponent} from './components/register-puppy-weight/register-puppy-weight.component';
import {PuppyWeightGraphComponent} from './components/puppy-weight-graph/puppy-weight-graph.component';
import {RegisterPuppyWeightFormComponent} from './components/register-puppy-weight-form/register-puppy-weight-form.component';

const routes: Routes = [
  {path: 'litters', component: LitterOverviewComponent},
  {path: 'litters/add', component: RegisterLitterComponent},
  {path: "dogs/:id", component: DogDetailsComponent },
  {path: "showresultaten/:id", component: ShowresultatenComponent },
  {path: 'gezondheidstesten/:id', component: HealthtestresultsComponent },
  {path: 'puppygroei', component: PuppydataComponent },
  {path: 'puppygroei/register', component: RegisterPuppyWeightComponent },
  {path: 'puppygroei/graph', component: PuppyWeightGraphComponent }
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
