import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from '../../../../core/hero.service';
import { Hero } from '../../../../core/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.heroService.heroes$;
    this.heroService.loadHeroes();
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
