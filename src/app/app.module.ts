import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RolMapComponent } from './rol-map/rol-map.component';
import { MapConfigurationComponent } from './map-configuration/map-configuration.component';
import { RouterModule } from '@angular/router';
import { SavedMapComponent } from './saved-map/saved-map.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    RolMapComponent,
    MapConfigurationComponent,
    SavedMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
