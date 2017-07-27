"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var stations_component_1 = require("./stations.component");
var stations_routes_1 = require("./stations.routes");
var core_2 = require("@agm/core");
var StationsModule = (function () {
    function StationsModule() {
    }
    return StationsModule;
}());
StationsModule = __decorate([
    core_1.NgModule({
        imports: [core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyCQX7DL9apVPV7iJzQqoqcFVrOXdGp_OJw'
            }), common_1.CommonModule, stations_routes_1.default],
        declarations: [stations_component_1.StationsComponent]
    })
], StationsModule);
exports.default = StationsModule;
//# sourceMappingURL=stations.module.js.map