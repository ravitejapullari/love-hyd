"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var service_module_1 = require("../services/service.module");
var StationsComponent = (function () {
    function StationsComponent(stationService) {
        this.stationService = stationService;
        this.lat = 17.434824;
        this.lng = 78.464001;
        this.zoom = 13;
        this.iconurl = 'app/assets/imgs/train.png';
        this.mapCard = false;
        this.showStations = false;
        this.markersObj = false;
        this.routeSel = false;
        this.stationsCard = true;
        this.getStationsdata();
        this.stationService.getLocation();
    }
    StationsComponent.prototype.getStationsdata = function () {
        var _this = this;
        this.stationService.getStations().subscribe(function (stationsdata) {
            _this.metroObject = stationsdata['METRO'];
            _this.mmtsObject = stationsdata['MMTS'];
            _this.stationsObject = _this.metroObject['RED'].stations;
            _this.mainObject = Object.assign({}, _this.mmtsObject, _this.metroObject);
            _this.origObject = _this.mainObject;
            _this.keyObjects = Object.keys(_this.mainObject);
            _this.origKeyObjects = _this.keyObjects;
            _this.concatAllStations();
            _this.zoom = 12;
        });
    };
    StationsComponent.prototype.concatAllStations = function () {
        this.mergeStations = [];
        for (var i = 0, j = this.keyObjects.length; i < j; i++) {
            for (var x = 0, y = this.origObject[this.keyObjects[i]].stations.length; x < y; x++) {
                this.mergeStations.push(this.origObject[this.keyObjects[i]].stations[x]);
            }
        }
        this.allStations = this.mergeStations.filter(function (obj, pos, arr) {
            return arr.map(function (mapObj) { return mapObj['station']; }).indexOf(obj['station']) === pos;
        });
        console.log(this.allStations);
        for (var k = 0, l = this.allStations.length; k < l; k++) {
            var _lat = parseInt(parseFloat(this.allStations[k]['lats']).toString().split('.')[1], 10);
            //parseFloat(this.allStations[k]['lats']);
            console.log(_lat);
        }
    };
    /* methods to drawline */
    StationsComponent.prototype.drawRailLine = function (lineName) {
        this.mainObject = [];
        this.routeIndex = [];
        this.drawRoute = [];
        this.stationsObject = [];
        this.routeSelected = [];
        this.presentLocation = [];
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
    };
    StationsComponent.prototype.getLocationStations = function () {
        this.lat = parseFloat(sessionStorage['lat']);
        this.lng = parseFloat(sessionStorage['long']);
    };
    StationsComponent.prototype.showSingleLine = function (line) {
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
    };
    StationsComponent.prototype.showStation = function (st, stInd) {
        this.lat = st.lats;
        this.lng = st.lngs;
        this.zoom = 16;
        console.log(st, stInd);
        if (this.routeIndex.length != 2) {
            this.routeIndex.push(stInd);
            this.routeIndex.sort(function (a, b) { return a - b; });
        }
    };
    StationsComponent.prototype.fetchRoute = function () {
        this.mainObject = [];
        this.keyObjects = [];
        this.routeStObj = [];
        this.drawRoute = [];
        for (var i = this.routeIndex[0], j = this.routeIndex[1] + 1; i < j; i++) {
            this.routeStObj.push(this.origObject[this.selectedRoute].stations[i]);
        }
        this.drawRoute['stations'] = this.routeStObj;
        this.drawRoute['color'] = this.origObject[this.selectedRoute].color;
        this.keyObjects.push(this.selectedLine);
        this.mainObject[this.selectedLine] = this.drawRoute;
        this.routeSelected = this.routeStObj;
        this.routeSel = true;
        this.zoom = 12;
    };
    /* show card */
    StationsComponent.prototype.showCard = function (line) {
        this.showStations = false;
        this.mapCard = true;
        this.routeSel = false;
        this.stationsCard = false;
        this.drawRailLine(line);
        this.zoom = 12;
    };
    StationsComponent.prototype.hideCard = function (stations) {
        this.mapCard = false;
        this.routeSel = false;
        if (stations == 'stations') {
            this.getStationsdata();
        }
    };
    StationsComponent.prototype.showStationsCard = function () {
        this.mapCard = true;
        this.zoom = 12;
    };
    StationsComponent.prototype.clickedMarker = function (station, index) {
        this.stationName = station;
    };
    return StationsComponent;
}());
StationsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-stations',
        styles: ["\n       .sebm-google-map-container {\n         height: 100%;\n       }\n    "],
        templateUrl: 'stations-component.html',
        providers: [service_module_1.ServiceModule]
    }),
    __metadata("design:paramtypes", [service_module_1.ServiceModule])
], StationsComponent);
exports.StationsComponent = StationsComponent;
//# sourceMappingURL=stations.component.js.map