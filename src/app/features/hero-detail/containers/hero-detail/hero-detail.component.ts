import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

import { Hero } from '../../../../core/hero';
import { HeroService } from '../../../../core/hero.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/state/app.interfaces';
import { LoadHeroById } from 'src/app/state/hero/hero.actions';
import { selectedHero } from 'src/app/state';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(new LoadHeroById({ id: id }));
    this.hero$ = this.store.pipe(select(selectedHero));
  }

  goBack(): void {
    this.location.back();
  }
}
