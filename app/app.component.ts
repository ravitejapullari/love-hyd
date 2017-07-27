import { Component } from '@angular/core';

import {HeaderComponent} from './modules/components/header/header.component';

@Component({
  selector: 'hyd-metro',
  templateUrl:'app/app-module.html',
})
export class AppComponent  { 
    name = 'Raviteja'; 
    usershand: boolean = true;
}
