import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [HeroDetailComponent, HeroComponent],
  imports: [
    CommonModule
  ]
})
export class HeroDetailModule { }
