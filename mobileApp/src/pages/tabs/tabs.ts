import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
//import { SchedulePage } from '../schedule/schedule';
//import { EventDetailPage } from '../event-detail/event-detail';
import { MainPage } from '../main/main';
import { VendorListPage } from '../vendor-list/vendor-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = MainPage;
  tab2Root: any = VendorListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;
  navParams: any;
  event: any;

  constructor(navParams: NavParams) {
    this.navParams = navParams;
    console.log("this.navParams", this.navParams); // returns NavParams {data: Object}
    this.event = this.navParams.data;
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
