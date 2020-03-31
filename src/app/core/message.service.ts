import { Injectable } from '@angular/core';
import { AppState } from '../state/app.interfaces';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ClearMessages } from '../state/message/message.actions';
import { messages } from '../state/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private store: Store<AppState>) {}

  get messages$(): Observable<string[]> {
    return this.store.pipe(select(messages));
  }

  clear() {
    this.store.dispatch(new ClearMessages());
  }
}
