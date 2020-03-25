import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from 'ngrx-data';

@Injectable({ providedIn: 'root' })
export class HeroService extends EntityCollectionServiceBase<Hero> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Hero', serviceElementsFactory);
  }
}
