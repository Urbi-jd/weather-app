import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './component/start/start.component';
import { SelectCityComponent } from './component/select-city/select-city.component';
import { ShowWeatherComponent } from './component/show-weather/show-weather.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { KelvinToCelsiusPipe } from './pipe/kelvin-to-celsius.pipe';

const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
];


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SelectCityComponent,
    ShowWeatherComponent,
    ToolbarComponent,
    PageNotFoundComponent,
    KelvinToCelsiusPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
