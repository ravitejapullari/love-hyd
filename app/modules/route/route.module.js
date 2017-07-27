"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var route_component_1 = require("./route.component");
var route_routes_1 = require("./route.routes");
var service_module_1 = require("../services/service.module");
var RouteModule = (function () {
    function RouteModule() {
    }
    return RouteModule;
}());
RouteModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, route_routes_1.default],
        declarations: [route_component_1.RouteComponent],
        providers: [service_module_1.ServiceModule]
    })
], RouteModule);
exports.default = RouteModule;
//# sourceMappingURL=route.module.js.map