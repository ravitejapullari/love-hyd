import {Component} from '@angular/core';
import {AgmCircle} from '@agm/core/directives/circle';

import {ServiceModule} from '../services/service.module';

@Component({
    moduleId: module.id,
    selector : 'app-stations',
    styles: [`
       .sebm-google-map-container {
         height: 100%;
       }
    `],
    templateUrl : 'stations-component.html',
    providers: [ServiceModule]
})

export class StationsComponent {
    lat: number = 17.434824;
    lng: number = 78.464001;
    zoom: number = 13;
    public stationsArray: string[];
    public keyObjects: string[];
    public origKeyObjects: string[];
    public lineKeys: string[];
    private routeIndex: number[];

    public mainObject: Object;
    public origObject: Object;
    public stationsObject: Object;
    private metroObject: Object;
    private mmtsObject: Object;
    private routeStObj: Array<any>;
    private drawRoute: Object;
    public routeSelected: Object;
    public mergeStations: Array<Object>;
    public allStations: Array<Object>;
    public presentLocation: Array<any>;

    private selectedLine: string;
    private stationName: string;
    private selectedRoute: string;
    private trainColor: string;

    public iconurl: string = 'app/assets/imgs/train.png';
    private mapCard: boolean = false;
    private showStations: boolean = false;
    private markersObj: boolean = false;
    private routeSel: boolean = false;
    private stationsCard: boolean = true;

    constructor(private stationService: ServiceModule) {
        this.getStationsdata();
        this.stationService.getLocation();
        
    }

    getStationsdata() {
        this.stationService.getStations().subscribe(stationsdata => {
            this.metroObject = stationsdata['METRO'];
            this.mmtsObject = stationsdata['MMTS'];
            this.stationsObject = this.metroObject['RED'].stations;
            this.mainObject = Object.assign({}, this.mmtsObject, this.metroObject);
            this.origObject = this.mainObject;
            this.keyObjects = Object.keys(this.mainObject);
            this.origKeyObjects = this.keyObjects;
            this.concatAllStations();
            this.zoom = 12;
        });
    }

    concatAllStations(){
        this.mergeStations = [];
        for(let i=0,j=this.keyObjects.length;i<j;i++){
            for(let x=0,y=this.origObject[this.keyObjects[i]].stations.length;x<y;x++){
                this.mergeStations.push(this.origObject[this.keyObjects[i]].stations[x]);
            }
        }
        this.allStations = this.mergeStations.filter((obj, pos, arr) => {
            return arr.map(mapObj => mapObj['station']).indexOf(obj['station']) === pos;
        });
        console.log(this.allStations);
        for(let k=0,l=this.allStations.length;k<l;k++){
            let _lat = parseInt(parseFloat(this.allStations[k]['lats']).toString().split('.')[1], 10);
            //parseFloat(this.allStations[k]['lats']);
            
            console.log(_lat);
        }
    }
    /* methods to drawline */
    drawRailLine(lineName: string) {
        this.mainObject = [];
        this.routeIndex = [];
        this.drawRoute = [];
        this.stationsObject = [];
        this.routeSelected = [];
        this.presentLocation =[];
        
        switch (lineName) {
            case 'MMTS':
                    this.mainObject = this.mmtsObject;
                    this.selectedLine = lineName;
                    this.lineKeys = Object.keys(this.mmtsObject);
                break;
            case 'METRO':
                    this.mainObject = this.metroObject;
                    this.selectedLine = lineName;
                    this.lineKeys = Object.keys(this.metroObject);
                break;
            default:
                    this.selectedLine = 'All Lines';
                break;
        }
        this.keyObjects = Object.keys(this.mainObject);
    }
    
    getLocationStations(){
       this.lat = parseFloat(sessionStorage['lat']);
       this.lng = parseFloat(sessionStorage['long']); 
    }

    showSingleLine (line: string) {
        this.mainObject = [];
        this.keyObjects = [];
        this.stationsObject = [];
        this.routeIndex = [];

        this.keyObjects.push(line);
        this.mainObject[line] = this.origObject[line];
        this.stationsObject = this.mainObject[line].stations;
        console.log(this.mainObject[line]);
        this.trainColor = this.mainObject[line].color;
        this.showStations = true;
        this.selectedRoute = line;
    }

    showStation (st: any, stInd: number) {
        this.lat = st.lats;
        this.lng = st.lngs;
        this.zoom = 16;
        console.log(st, stInd);
        if(this.routeIndex.length != 2){
            this.routeIndex.push(stInd);
            this.routeIndex.sort(function(a,b){return a-b});
       }
    }

    fetchRoute() {
        this.mainObject = [];
        this.keyObjects = [];
        this.routeStObj = [];
        this.drawRoute = [];

        for(let i=this.routeIndex[0], j=this.routeIndex[1]+1; i<j; i++){
           this.routeStObj.push(this.origObject[this.selectedRoute].stations[i]);  
        }
        this.drawRoute['stations'] = this.routeStObj;
        this.drawRoute['color'] = this.origObject[this.selectedRoute].color;
        this.keyObjects.push(this.selectedLine);
        this.mainObject[this.selectedLine] = this.drawRoute;
        this.routeSelected = this.routeStObj;
        this.routeSel = true;
        this.zoom = 12;
    }
    /* show card */
    showCard(line: string) {
        this.showStations = false;
        this.mapCard = true;
        this.routeSel = false;
        this.stationsCard = false;
        this.drawRailLine(line);
        this.zoom = 12;
    }

    hideCard(stations: string) {
       this.mapCard = false;
       this.routeSel = false;
        if(stations == 'stations'){
            this.getStationsdata();
        }
    }
    
    showStationsCard(){
       this.mapCard = true; 
       this.zoom = 12;
    }

    clickedMarker(station: string, index: number) {
        this.stationName = station;
    }
}