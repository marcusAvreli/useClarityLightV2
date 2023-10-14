import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS,HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {reducer} from './common/reducers/index';
import {CsvService} from './store/csvService';
import {Effects} from './store/effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
	,HttpModule
	,HttpClientModule
	,EffectsModule.run(Effects)
	,StoreModule.provideStore(reducer)
  ],
  providers: [CsvService,HttpModule,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
