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
var RouteComponent = (function () {
    function RouteComponent(stationService) {
        this.stationService = stationService;
        this.getStationsdata();
    }
    RouteComponent.prototype.getStationsdata = function () {
        var _this = this;
        this.stationService.getStations().subscribe(function (stationsdata) {
            _this.stationsArray = Object.keys(stationsdata);
            _this.stationsObject = stationsdata;
            console.log(stationsdata);
        });
    };
    return RouteComponent;
}());
RouteComponent = __decorate([
    core_1.Component({
        selector: 'app-route',
        templateUrl: './app/modules/route/route-component.html',
        providers: [service_module_1.ServiceModule]
    }),
    __metadata("design:paramtypes", [service_module_1.ServiceModule])
], RouteComponent);
exports.RouteComponent = RouteComponent;
//# sourceMappingURL=route.component.js.map