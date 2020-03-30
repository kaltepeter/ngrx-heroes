import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {
  exhaustMap,
  map,
  catchError,
  tap,
  switchMap
} from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import {
  UserActionTypes,
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
  DeleteUserByIdFail,
  SetSearchQuery,
  SelectUserById
} from './user.actions';
import { User } from './user.model';
import { UserService } from './user.service';

@Injectable()
export class UserEffects {

  // ========================================= CREATE
  @Effect()
  create: Observable<Action> = this.actions$
    .pipe(
      ofType<CreateUser>(UserActionTypes.CreateUser),
      exhaustMap((action) =>
        this.service.create(action.payload.user).pipe(
          map((user: User) => new CreateUserSuccess({ result: user })),
          catchError(({ message }) =>
            of(new CreateUserFail({ error: message }))
          )
        )
      )
    );

  // ========================================= SEARCH
  @Effect()
  search: Observable<Action> = this.actions$
  .pipe(
      ofType<SearchAllUserEntities>(UserActionTypes.SearchAllUserEntities),
      // Use the state's filtering and pagination values in this search call
      // here if desired:
      exhaustMap(() =>
        this.service.search().pipe(
          map((entities: Array<User>) =>
            new SearchAllUserEntitiesSuccess({ result: entities })
          ),
          catchError(({ message }) =>
            of(new SearchAllUserEntitiesFail({ error: message }))
          )
        )
      )
    );

  // ========================================= LOAD BY ID
  @Effect()
  loadById: Observable<Action> = this.actions$
  .pipe(
      ofType<LoadUserById>(UserActionTypes.LoadUserById),
      switchMap((action) =>
        this.service.getById(action.payload.id).pipe(
          map((user: User) => new LoadUserByIdSuccess({ result: user })
          ),
          catchError(({ message }) =>
            of(new LoadUserByIdFail({ error: message }))
          )
        )
      )
    );

  // ========================================= UPDATE
  @Effect()
  update: Observable<Action> = this.actions$
  .pipe(
      ofType<UpdateUser>(UserActionTypes.UpdateUser),
      exhaustMap((action) =>
        this.service.update(action.payload.user).pipe(
          map((user: User) =>
            new UpdateUserSuccess({
              update: {
                id: user.id,
                changes: user
              } as Update<User>
            })
          ),
          catchError(({ message }) =>
            of(new UpdateUserFail({ error: message }))
          )
        )
      )
    );

  // ========================================= DELETE
  @Effect()
  delete: Observable<Action> = this.actions$
  .pipe(
      ofType<DeleteUserById>(UserActionTypes.DeleteUserById),
      exhaustMap((action) =>
        this.service.deleteById(action.payload.id).pipe(
          map((id: number) => new DeleteUserByIdSuccess({ id })),
          catchError(({ message }) =>
            of(new DeleteUserByIdFail({ error: message }))
          )
        )
      )
    );

  // ========================================= QUERY
  @Effect({
    dispatch: false
  })
  paging: Observable<Action> = this.actions$
  .pipe(
      ofType<SetSearchQuery>(UserActionTypes.SetSearchQuery),
      tap((action) => {
        // do stuff with: action.payload.limit & action.payload.page
      })
    );

  // ========================================= SELECTED ID
  @Effect({
    dispatch: false
  })
  selectedId: Observable<Action> = this.actions$
  .pipe(
      ofType<SelectUserById>(UserActionTypes.SelectUserById),
      tap((action) => {
        // do stuff with: action.payload.id
      })
    );

  constructor(private actions$: Actions, private service: UserService) {}
}
