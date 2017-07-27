import {CommonModule} from '@angular/common';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {StationsComponent} from './stations.component';
import stationsRoutes from './stations.routes';

import {AgmCoreModule, AgmDataLayer} from '@agm/core';

@NgModule({
    imports : [AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCQX7DL9apVPV7iJzQqoqcFVrOXdGp_OJw'
    }), CommonModule, stationsRoutes],
    declarations : [StationsComponent]
})

export default class StationsModule{}