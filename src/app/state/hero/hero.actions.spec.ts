import * as HeroActions from './hero.actions';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new HeroActions.LoadHeros()).toBeTruthy();
  });
});
