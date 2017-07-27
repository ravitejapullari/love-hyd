import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    { path : '', redirectTo : 'stations', pathMatch: 'full'},
    { path : '', loadChildren : 'app/modules/stations/stations.module'},
    { path : '', loadChildren : 'app/modules/home/home.module' },
    { path : 'stations', loadChildren : 'app/modules/route/route.module' }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);