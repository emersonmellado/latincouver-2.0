import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';


@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html'
})
export class EventDetailPage {
  event: any;

  constructor(
    public events: Events,
    public navParams: NavParams) {
    console.log("navParams", navParams);
    this.event = navParams.data;
    this.events.publish('user:login');
  }
}
