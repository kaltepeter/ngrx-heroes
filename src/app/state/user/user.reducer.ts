import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { User } from './user.model';
import { UserActions, UserActionTypes } from './user.actions';

export interface UserSearchQuery {
  filter: string;
  sorting: string;
  limit: number;
  page: number;
}

export interface UserState extends EntityState<User> {
  // additional entities state properties
  selectedId: number;
  loading: boolean;
  error: string;
  query: UserSearchQuery;
}

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUserState: UserState = userAdapter.getInitialState({
  // additional user state properties
  selectedId: null,
  loading: false,
  error: '',
  query: {
    filter: '',
    sorting: '',
    limit: 999,
    page: 1
  }
});

export function userReducer(state = initialUserState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.CreateUser:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case UserActionTypes.CreateUserSuccess:
      return {
        ...userAdapter.addOne(action.payload.result, state),
        loading: false,
        error: ''
      };

    case UserActionTypes.CreateUserFail:
      return {
        ...state,
        loading: false,
        error: 'User create failed: ' + action.payload.error
      };

    case UserActionTypes.SearchAllUserEntities:
      return {
        ...userAdapter.removeAll(state),
        loading: true,
        error: ''
      };

    case UserActionTypes.SearchAllUserEntitiesSuccess:
      return {
        ...userAdapter.addAll(action.payload.result, state),
        loading: false,
        error: ''
      };

    case UserActionTypes.SearchAllUserEntitiesFail:
      return {
        ...state,
        loading: false,
        error: 'User search failed: ' + action.payload.error
      };

    case UserActionTypes.LoadUserById:
      return {
        ...userAdapter.removeAll(state),
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case UserActionTypes.LoadUserByIdSuccess:
      return {
        ...userAdapter.addOne(action.payload.result, state),
        loading: false,
        error: ''
      };

    case UserActionTypes.LoadUserByIdFail:
      return {
        ...state,
        loading: false,
        error: 'User load failed: ' + action.payload.error
      };

    case UserActionTypes.UpdateUser:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case UserActionTypes.UpdateUserSuccess:
      return {
        ...userAdapter.updateOne(action.payload.update, state),
        loading: false,
        error: ''
      };

    case UserActionTypes.UpdateUserFail:
      return {
        ...state,
        loading: false,
        error: 'User update failed: ' + action.payload.error
      };

    case UserActionTypes.DeleteUserById:
      return {
        ...state,
        selectedId: action.payload.id,
        loading: true,
        error: ''
      };

    case UserActionTypes.DeleteUserByIdSuccess:
      return {
        ...userAdapter.removeOne(action.payload.id, state),
        loading: false,
        error: ''
      };

    case UserActionTypes.DeleteUserByIdFail:
      return {
        ...state,
        loading: false,
        error: 'User delete failed: ' + action.payload.error
      };

    case UserActionTypes.SetSearchQuery:
      return {
        ...state,
        query: {
          ...state.query,
          ...action.payload
        }
      };

    case UserActionTypes.SelectUserById:
      return {
        ...state,
        selectedId: action.payload.id,
        error: ''
      };

    default:
      return state;
  }
}

export const getSelectedId = (state: UserState) => state.selectedId;
export const getLoading = (state: UserState) => state.loading;
export const getError = (state: UserState) => state.error;
export const getQuery = (state: UserState) => state.query;
