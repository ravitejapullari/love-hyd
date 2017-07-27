import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common'
import {RouteComponent} from './route.component';
import routeRoutes from './route.routes';
import {ServiceModule} from '../services/service.module';

@NgModule({
    imports : [CommonModule, routeRoutes],
    declarations : [RouteComponent],
    providers: [ServiceModule]
})
export default class RouteModule{}