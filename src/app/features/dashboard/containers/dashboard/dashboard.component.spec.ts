import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { TopHeroesListComponent } from '../../components/top-heroes-list/top-heroes-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { TestStore } from 'src/app/testing/test.store';
import { HeroMockService } from 'src/app/core/hero.mock.service';
import { HeroService } from 'src/app/core/hero.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DashboardComponent, TopHeroesListComponent],
      providers: [{ provide: Store, useClass: TestStore },
      {provide: HeroService, useClass: HeroMockService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
