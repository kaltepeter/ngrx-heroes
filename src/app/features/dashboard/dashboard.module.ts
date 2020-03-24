import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { TopHeroesComponent } from './components/top-heroes/top-heroes.component';

@NgModule({
  declarations: [DashboardComponent, TopHeroesComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
