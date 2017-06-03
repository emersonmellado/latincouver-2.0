import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
//import { SchedulePage } from '../schedule/schedule';
import { EventDetailPage } from '../event-detail/event-detail';
import { SpeakerListPage } from '../speaker-list/speaker-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  //tab1Root: any = SchedulePage;
  tab1Root: any = EventDetailPage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    console.log("navParams:111", navParams);
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
