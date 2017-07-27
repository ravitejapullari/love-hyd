import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StationsComponent} from './stations.component';

const stationsRoutes = [
    {path : 'stations', component : StationsComponent}
];

export default RouterModule.forChild(stationsRoutes);