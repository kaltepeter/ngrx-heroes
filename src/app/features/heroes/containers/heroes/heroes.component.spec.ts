import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroesComponent } from './heroes.component';
import { HeroesListComponent } from './../../components/heroes-list/heroes-list.component';
import { Store } from '@ngrx/store';
import { TestStore } from 'src/app/testing/test.store';
import { HeroService } from 'src/app/core/hero.service';
import { HeroMockService } from 'src/app/core/hero.mock.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeroesComponent, HeroesListComponent],
      providers: [{ provide: Store, useClass: TestStore },
      {provide: HeroService, useClass: HeroMockService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
