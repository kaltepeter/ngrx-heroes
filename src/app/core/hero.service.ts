import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Hero } from './hero';
import { AppState } from '../state/app.interfaces';
import { Store, select } from '@ngrx/store';
import { topHeroes, heroes, selectedHero } from '../state/hero';
import { SearchAllHeroEntities, LoadHeroById } from '../state/hero/hero.actions';

@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  get topHeroes$(): Observable<Hero[]> {
    return this.store.pipe(select(topHeroes));
  }

  get heroes$(): Observable<Hero[]> {
    return this.store.pipe(select(heroes));
  }

  get selectedHero$(): Observable<Hero> {
    return this.store.pipe(select(selectedHero));
  }

  loadHeroes() {
    this.store.dispatch(new SearchAllHeroEntities());
  }

  loadHero(id: number) {
    this.store.dispatch(new LoadHeroById({id}));
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>('/api/heroes');
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`/api/heroes/${id}`);
  }
}
