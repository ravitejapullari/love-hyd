import {Injectable, NgModule} from '@angular/core';
import {HttpModule,Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class ServiceModule{
    constructor(private http:Http){
        console.log('service module');
    }

    getStations(){
        return this.http.get('./app/json/metro-stations.json')
        .map(res => res.json());
    }
    
    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
        
        function showPosition(position: any){
            //return position.coords;
            console.log(position.coords);
            console.log(parseFloat(position.coords.lontitude));
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                sessionStorage['lat'] = position.coords.latitude;
                sessionStorage['long'] = position.coords.longitude;
            } else {
                // Sorry! No Web Storage support..
            }
        }
    }
}

