import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/core/hero.service';
import { Hero } from 'src/app/core/hero';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private router: Router, private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.getAll();
    this.heroes$ = this.heroService.entities$.pipe(map(heroes => heroes.slice(1, 5)));
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
