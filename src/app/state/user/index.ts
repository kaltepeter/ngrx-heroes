import { createSelector, createFeatureSelector } from '@ngrx/store';

import {
  userAdapter,
  getSelectedId,
  getLoading,
  getError,
  getQuery
} from './user.reducer';
import { UserState } from './user.reducer';

export const getUserState = createFeatureSelector<UserState>('user');

export const {
  selectIds: userIds,
  selectEntities: userEntities,
  selectAll: user,
  selectTotal: userCount
} = userAdapter.getSelectors(getUserState);

export const currentUserId = createSelector(
  getUserState,
  getSelectedId
);

export const currentUser = createSelector(
  currentUserId,
  userEntities,
  (selectedUserId, entities) =>
    selectedUserId && entities[selectedUserId]
);

export const userLoading = createSelector( // TODO: Need to pluraliae  name
  getUserState,
  getLoading
);

export const userError = createSelector(
  getUserState,
  getError
);

export const userQuery = createSelector(
  getUserState,
  getQuery
);
