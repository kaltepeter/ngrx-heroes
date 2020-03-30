import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import {
  CreateUser,
  CreateUserSuccess,
  CreateUserFail,
  SearchAllUserEntities,
  SearchAllUserEntitiesSuccess,
  SearchAllUserEntitiesFail,
  LoadUserById,
  LoadUserByIdSuccess,
  LoadUserByIdFail,
  UpdateUser,
  UpdateUserSuccess,
  UpdateUserFail,
  DeleteUserById,
  DeleteUserByIdSuccess,
  DeleteUserByIdFail
} from './user.actions';
import { generateUser, generateUserArray } from './user.model';
// TODO: Change this path when you move your service file:
import { UserService } from './user.service';
import { UserEffects } from './user.effects';

describe('UserEffects', () => {
  let actions: Observable<any>;
  let effects: UserEffects;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserEffects,
        provideMockActions(() => actions),
        {
          provide: UserService,
          useValue: jasmine.createSpyObj('service', [
            'create',
            'search',
            'getById',
            'update',
            'deleteById'
          ])
        }
      ]
    });

    effects = TestBed.get(UserEffects);
    service = TestBed.get(UserService);
  });

  it('should be constructed', () => {
    expect(effects).toBeTruthy();
  });

  describe('create', () => {
    it('should return CreateUserSuccess action with entity on success', () => {
      const entity = generateUser();
      const insertAction = new CreateUser({ user: entity });
      const successAction = new CreateUserSuccess({ result: entity });

      actions = hot('a-', { a: insertAction });
      service.create.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.create).toBeObservable(expected);
    });

    it('should return CreateUserFail with error object on failure', () => {
      const entity = generateUser();
      const insertAction = new CreateUser({ user: entity });
      const failAction = new CreateUserFail({ error: 'fail' });

      actions = hot('i-', { i: insertAction });
      service.create.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.create).toBeObservable(expected);
    });
  });

  describe('search', () => {
    it('should return SearchAllUserEntitiesSuccess action with entities on success', () => {
      const entities = generateUserArray();
      const searchAction = new SearchAllUserEntities();
      const successAction = new SearchAllUserEntitiesSuccess({ result: entities });

      actions = hot('a-', { a: searchAction });
      service.search.and.returnValue(cold('-e|', { e: entities }));
      const expected = cold('-s', { s: successAction });

      expect(effects.search).toBeObservable(expected);
    });

    it('should return SearchAllUserEntitiesFail with error object on failure', () => {
      const searchAction = new SearchAllUserEntities();
      const failAction = new SearchAllUserEntitiesFail({ error: 'fail' });

      actions = hot('a-', { a: searchAction });
      service.search.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.search).toBeObservable(expected);
    });
  });

  describe('loadById', () => {
    it('should return LoadUserByIdSuccess action with entity on success', () => {
      const entity = generateUser();
      const loadAction = new LoadUserById({ id: entity.id });
      const successAction = new LoadUserByIdSuccess({ result: entity});

      actions = hot('a-', { a: loadAction });
      service.getById.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.loadById).toBeObservable(expected);
    });

    it('should return LoadUserByIdFail with error object on failure', () => {
      const entity = generateUser();
      const loadAction = new LoadUserById({ id: entity.id });
      const failAction = new LoadUserByIdFail({ error: 'fail' });

      actions = hot('a-', { a: loadAction });
      service.getById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.loadById).toBeObservable(expected);
    });
  });

  describe('update', () => {
    it('should return UpdateUserSuccess action with entity on success', () => {
      const entity = generateUser();
      const updateAction = new UpdateUser({ user: entity });
      const successAction = new UpdateUserSuccess({ update: {
        id: entity.id,
        changes: entity
      }});

      actions = hot('a-', { a: updateAction });
      service.update.and.returnValue(cold('-e|', { e: entity }));
      const expected = cold('-s', { s: successAction });

      expect(effects.update).toBeObservable(expected);
    });

    it('should return UpdateUserFail with error object on failure', () => {
      const entity = generateUser();
      const updateAction = new UpdateUser({ user: entity });
      const failAction = new UpdateUserFail({ error: 'fail' });

      actions = hot('a-', { a: updateAction });
      service.update.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.update).toBeObservable(expected);
    });
  });

  describe('delete', () => {
    it('should return DeleteUserByIdSuccess action with entity ID on success', () => {
      const entity = generateUser();
      const deleteAction = new DeleteUserById({ id: entity.id });
      const successAction = new DeleteUserByIdSuccess({ id: entity.id });

      actions = hot('a-', { a: deleteAction });
      service.deleteById.and.returnValue(cold('-e|', { e: entity.id }));
      const expected = cold('-s', { s: successAction });

      expect(effects.delete).toBeObservable(expected);
    });

    it('should return DeleteUserByIdFail with error object on failure', () => {
      const entity = generateUser();
      const deleteAction = new DeleteUserById({ id: entity.id });
      const failAction = new DeleteUserByIdFail({ error: 'fail' });

      actions = hot('a-', { a: deleteAction });
      service.deleteById.and.returnValue(cold('-#|', {}, { message: 'fail'}));
      const expected = cold('-f', { f: failAction });

      expect(effects.delete).toBeObservable(expected);
    });
  });

});
