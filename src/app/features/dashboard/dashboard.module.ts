import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { TopHeroesComponent } from './components/top-heroes/top-heroes.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, TopHeroesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
})
export class DashboardModule { }
