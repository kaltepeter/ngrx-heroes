/*
 * TODO:
 * This file should not remain in the state folder. Move it to somewhere within
 * your app code.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'api/';

  constructor(private httpClient: HttpClient) {}

  create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}user`, {
      ...user,
      // We clear out the ID to indicate that this should be a new entry:
      id: null
    });
  }

  search(): Observable<Array<User>> {
    // TODO: get based on state.paging (filter, sorting, page, limit)
    return this.httpClient.get<Array<User>>(`${this.BASE_URL}user`);
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.BASE_URL}user/${id}`);
  }

  update(user: User): Observable<User> {
    return this.httpClient
      .put<User>(`${this.BASE_URL}user/${user.id}`, user)
      // The following pipe can be removed if your backend service returns the
      // edited value:
      .pipe(switchMap(() => of(user)));
  }

  deleteById(id: number): Observable<number> {
    return this.httpClient.delete<void>(`${this.BASE_URL}user/${id}`)
      // The following pipe can be removed if your backend service returns the
      // ID or body of the deleted entity:
      .pipe(switchMap(() => of(id)));
  }
}
