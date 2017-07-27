import {Component} from '@angular/core';
import {ServiceModule} from '../services/service.module';


@Component({
    selector : 'app-route',
    templateUrl : './app/modules/route/route-component.html',
    providers : [ServiceModule]
})

export class RouteComponent {
    stationsObject: Object;
    stationsArray: string[];

    constructor(private stationService: ServiceModule) {
        this.getStationsdata();
    }

    getStationsdata() {
        this.stationService.getStations().subscribe(stationsdata => {
            this.stationsArray = Object.keys(stationsdata);
            this.stationsObject = stationsdata;
            console.log(stationsdata);
        });
    }
}