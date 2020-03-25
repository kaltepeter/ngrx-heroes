
import { HeroActions, HeroActionTypes } from './hero.actions';

export const heroFeatureKey = 'hero';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: HeroActions): State {
  switch (action.type) {

    case HeroActionTypes.LoadHeros:
      return state;

    default:
      return state;
  }
}
