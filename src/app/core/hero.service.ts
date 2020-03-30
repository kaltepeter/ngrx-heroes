import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { AppState } from '../state/app.interfaces';
import { Store, select } from '@ngrx/store';
import { topHeroes, heroes, selectedHero } from '../state/hero';
import { SearchAllHeroEntities, LoadHeroById } from '../state/hero/hero.actions';

@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return this.http.get<Hero[]>('/api/heroes');
  }

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

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(`/api/heroes/${id}`);
  }
}
