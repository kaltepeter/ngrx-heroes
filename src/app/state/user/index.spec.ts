import {
  currentUserId,
  currentUser,
  userLoading,
  userError,
  userQuery
} from './index';
import { User } from './user.model';

const createUser = ({ id = 0, name = '', description = '' } = {}): User => ({
  id: id,
  name: name || 'name',
  description: description || `description`
});

// State Factory
const createUsersState = ({
  entities = {
    '1': createUser({ id: 1, name: 'Bob' }),
    '2': createUser({ id: 2, name: 'Sue' }),
    '3': createUser({ id: 3, name: 'Mary' })
  },
  ids = ['1', '2', '3'],
  selectedId = 1,
  loading = false,
  error = '',
  query = null
} = {}) => ({
  user: {
    ids,
    entities,
    selectedId,
    loading,
    error,
    query
  }
});

let state;

describe('userSelectors', () => {
  beforeEach(() => {
    state = createUsersState();
  });

  it('currentUserId', () => {
    expect(currentUserId(state)).toEqual(1);
  });

  it('currentUser', () => {
    expect(currentUser(state)).toEqual(state.user.entities[1]);
  });

  it('userLoading', () => {
    state.user.loading = true;
    expect(userLoading(state)).toEqual(state.user.loading);
  });

  it('userError', () => {
    state.user.error = 'error loading users';
    expect(userError(state)).toEqual(state.user.error);
  });

  it('userQuery', () => {
    state.user.query = 'page=2';
    expect(userQuery(state)).toEqual(state.user.query);
  });
});
