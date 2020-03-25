import { Action } from '@ngrx/store';

export enum HeroActionTypes {
  LoadHeros = '[Hero] Load Heros',
  
  
}

export class LoadHeros implements Action {
  readonly type = HeroActionTypes.LoadHeros;
}


export type HeroActions = LoadHeros;
