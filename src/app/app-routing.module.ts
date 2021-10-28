import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolMapComponent } from './rol-map/rol-map.component';
import { MapConfigurationComponent } from './map-configuration/map-configuration.component';
import { RolMapResolve } from './resolvers/rol-map.resolve';
import { SavedMapComponent } from './saved-map/saved-map.component';

const routes: Routes = [
  {
    path: 'configuration',
    component: MapConfigurationComponent
  },
  {
    path: 'map/:rows/:columns/:configurationId',
    component: RolMapComponent,
    resolve: {
      rolMap: RolMapResolve
    }
  },
  {
    path: 'saved-map/:rows/:columns/:configurationId',
    component: SavedMapComponent,
    resolve: {
      rolMap: RolMapResolve
    }
  },
  {
    path: '',
    redirectTo: '/configuration',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/configuration',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
