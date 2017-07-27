"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var appRoutes = [
    { path: '', redirectTo: 'stations', pathMatch: 'full' },
    { path: '', loadChildren: 'app/modules/stations/stations.module' },
    { path: '', loadChildren: 'app/modules/home/home.module' },
    { path: 'stations', loadChildren: 'app/modules/route/route.module' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map