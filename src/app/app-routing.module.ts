import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LitterOverviewComponent} from './components/litter-overview/litter-overview.component';
import {RegisterLitterComponent} from './components/register-litter/register-litter.component';

const routes: Routes = [
  {path: 'litters', component: LitterOverviewComponent},
  {path: 'litters/add', component: RegisterLitterComponent}
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
