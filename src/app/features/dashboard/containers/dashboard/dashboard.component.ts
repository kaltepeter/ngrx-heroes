import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Hero } from 'src/app/core/hero';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.interfaces';
import { topHeroes } from 'src/app/state';
import { SearchAllHeroEntities } from 'src/app/state/hero/hero.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.heroes$ = this.store.pipe(select(topHeroes));
    this.store.dispatch(new SearchAllHeroEntities());
  }

  onHeroClicked(hero: Hero) {
    this.router.navigate(['/detail', hero.id]);
  }
}
