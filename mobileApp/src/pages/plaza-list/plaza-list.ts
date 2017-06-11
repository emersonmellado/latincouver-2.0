import { Component  } from '@angular/core';
import { NavParams, Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-plaza-list',
  templateUrl: 'plaza-list.html'
})
export class PlazaListPage {
  event: any;

  constructor(public navParams: NavParams, public nav: Nav) {
    console.log("navParams.data", navParams.data);
    console.log("nav", nav);
    this.event = navParams.data;
  }
}
