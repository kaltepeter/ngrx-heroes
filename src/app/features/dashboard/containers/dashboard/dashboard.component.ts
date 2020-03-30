import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Hero } from 'src/app/core/hero';
import { HeroService } from 'src/app/core/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.heroService.topHeroes$;
    this.heroService.loadHeroes();
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
