import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {
  exhaustMap,
  map,
  catchError,
  switchMap
} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import {
  HeroActionTypes,
  SearchAllHeroEntities,
  SearchAllHeroEntitiesSuccess,
  SearchAllHeroEntitiesFail,
  LoadHeroById,
  LoadHeroByIdSuccess,
  LoadHeroByIdFail
} from './hero.actions';
import { Hero } from '../../core/hero';
import { HeroService } from '../../core/hero.service';

@Injectable()
export class HeroEffects {
  @Effect()
  search: Observable<Action> = this.actions$.pipe(
    ofType<SearchAllHeroEntities>(HeroActionTypes.SearchAllHeroEntities),
    exhaustMap(() =>
      this.service.getHeroes().pipe(
        map(
          (entities: Array<Hero>) =>
            new SearchAllHeroEntitiesSuccess({ result: entities })
        ),
        catchError(({ message }) =>
          of(new SearchAllHeroEntitiesFail({ error: message }))
        )
      )
    )
  );

  @Effect()
  loadById: Observable<Action> = this.actions$.pipe(
    ofType<LoadHeroById>(HeroActionTypes.LoadHeroById),
    switchMap(action =>
      this.service.getHero(action.payload.id).pipe(
        map((hero: Hero) => new LoadHeroByIdSuccess({ result: hero })),
        catchError(({ message }) =>
          of(new LoadHeroByIdFail({ error: message }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: HeroService) {}
}
