import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { User } from './user.model';
import { UserSearchQuery } from './user.reducer';

export enum UserActionTypes {
  CreateUser = '[User] Create',
  CreateUserSuccess = '[User] Insert Success',
  CreateUserFail = '[User] Insert Fail',

  SearchAllUserEntities = '[User] Search',
  SearchAllUserEntitiesSuccess = '[User] Search Success',
  SearchAllUserEntitiesFail = '[User] Search Fail',

  LoadUserById = '[User] Load By ID',
  LoadUserByIdSuccess = '[User] Load Success',
  LoadUserByIdFail = '[User] Load Fail',

  UpdateUser = '[User] Update',
  UpdateUserSuccess = '[User] Update Success',
  UpdateUserFail = '[User] Update Fail',

  DeleteUserById = '[User] Delete By ID',
  DeleteUserByIdSuccess = '[User] Delete Success',
  DeleteUserByIdFail = '[User] Delete Fail',

  SetSearchQuery = '[User] Set Search Query',
  SelectUserById = '[User] Select By ID'
}

// ========================================= CREATE

export class CreateUser implements Action {
  readonly type = UserActionTypes.CreateUser;
  constructor(public payload: { user: User }) {}
}

export class CreateUserSuccess implements Action {
  readonly type = UserActionTypes.CreateUserSuccess;
  constructor(public payload: { result: User }) {}
}

export class CreateUserFail implements Action {
  readonly type = UserActionTypes.CreateUserFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= SEARCH

export class SearchAllUserEntities implements Action {
  readonly type = UserActionTypes.SearchAllUserEntities;
}

export class SearchAllUserEntitiesSuccess implements Action {
  readonly type = UserActionTypes.SearchAllUserEntitiesSuccess;
  constructor(public payload: { result: Array<User> }) {}
}

export class SearchAllUserEntitiesFail implements Action {
  readonly type = UserActionTypes.SearchAllUserEntitiesFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= LOAD BY ID

export class LoadUserById implements Action {
  readonly type = UserActionTypes.LoadUserById;
  constructor(public payload: { id: number }) {}
}

export class LoadUserByIdSuccess implements Action {
  readonly type = UserActionTypes.LoadUserByIdSuccess;
  constructor(public payload: { result: User }) {}
}

export class LoadUserByIdFail implements Action {
  readonly type = UserActionTypes.LoadUserByIdFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= UPDATE

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: { user: User }) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;
  constructor(public payload: { update: Update<User> }) {}
}

export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UpdateUserFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= DELETE

export class DeleteUserById implements Action {
  readonly type = UserActionTypes.DeleteUserById;
  constructor(public payload: { id: number }) {}
}

export class DeleteUserByIdSuccess implements Action {
  readonly type = UserActionTypes.DeleteUserByIdSuccess;
  constructor(public payload: { id: number }) {}
}

export class DeleteUserByIdFail implements Action {
  readonly type = UserActionTypes.DeleteUserByIdFail;
  constructor(public payload: { error: string }) {}
}

// ========================================= QUERY

export class SetSearchQuery implements Action {
  readonly type = UserActionTypes.SetSearchQuery;
  constructor(public payload: Partial<UserSearchQuery>) {}
}

// ========================================= SELECTED ID

export class SelectUserById implements Action {
  readonly type = UserActionTypes.SelectUserById;
  constructor(public payload: { id: number }) {}
}

export type UserActions =
  | CreateUser
  | CreateUserSuccess
  | CreateUserFail
  | SearchAllUserEntities
  | SearchAllUserEntitiesSuccess
  | SearchAllUserEntitiesFail
  | LoadUserById
  | LoadUserByIdSuccess
  | LoadUserByIdFail
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail
  | DeleteUserById
  | DeleteUserByIdSuccess
  | DeleteUserByIdFail
  | SetSearchQuery
  | SelectUserById;
