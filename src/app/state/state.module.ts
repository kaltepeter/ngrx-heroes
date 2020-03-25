import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomRouterStateSerializer } from './state-utils';
import { environment } from 'src/environments/environment';
import { appReducer, appMetaReducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { HeroEffects } from './hero/hero.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }),
    EffectsModule.forRoot([HeroEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: []
})
export class StateModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
      ]
    };
  }
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: StateModule
  ) {
    if (parentModule) {
      throw new Error('StateModule is already loaded. Import it in the AppModule only');
    }
  }
}
