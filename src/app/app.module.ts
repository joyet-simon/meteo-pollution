import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeteoPollutionModule } from './meteo-pollution/meteo-pollution.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MeteoPollutionModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  exports:[
    SettingsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
