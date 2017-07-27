import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';

import {RouteComponent} from './route.component';

const routeRoutes  = [
    {path : 'route', component : RouteComponent}
];

export default RouterModule.forChild(routeRoutes);