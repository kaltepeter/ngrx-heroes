import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from '../../../../core/hero.service';
import { Hero } from '../../../../core/hero';
import { AppState } from 'src/app/state/app.interfaces';
import { Store, select } from '@ngrx/store';
import { SearchAllHeroEntities } from 'src/app/state/hero/hero.actions';
import { heroes } from 'src/app/state/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(heroes));
    this.store.dispatch(new SearchAllHeroEntities());
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
