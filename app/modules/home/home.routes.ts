import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';

const homeRoutes = [
    {path : 'home' , component : HomeComponent}
];

export default RouterModule.forChild(homeRoutes);