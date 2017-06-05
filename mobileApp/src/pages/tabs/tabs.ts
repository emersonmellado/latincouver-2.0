import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
//import { SchedulePage } from '../schedule/schedule';
//import { EventDetailPage } from '../event-detail/event-detail';
import { MainPage } from '../main/main';
import { SpeakerListPage } from '../speaker-list/speaker-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = MainPage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = MapPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
