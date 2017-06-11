import { Component  } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  event: any;
  rootPage: any;

  // @ViewChild(Nav) nav: Nav;
  // @ViewChild('content') navCtrl: NavController;

  constructor(
    public events: Events,
    public navParams: NavParams) {
    console.log("navParams:222", navParams);
    //LatincouverApp.rootPage = TabsPage;
    //this.navCtrl.setRoot(TabsPage);
    this.event = navParams.data;
    console.log(".plazas", this.event.plazas);
    //this.events.publish('user:login');
  }
}
