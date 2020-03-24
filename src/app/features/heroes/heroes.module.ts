import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';

@NgModule({
  declarations: [HeroesComponent, HeroesListComponent],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
