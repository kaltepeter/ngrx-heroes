import { createSelector } from '@ngrx/store';
import { HeroState } from './hero/hero.reducer';

export interface AppState {
  hero: HeroState;
}

export const selectHero = (state: AppState) => state.hero;

export const selectedHero = createSelector(
  selectHero,
  hero => hero.hero
);

export const heroes = createSelector(
  selectHero,
  hero => hero.heroes
);

export const topHeroes = createSelector(
  heroes,
  data => data.slice(1, 5)
);
