import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { ShareService } from '../../services/ShareService';

@Component({
  selector: 'page-plaza-detail',
  templateUrl: 'plaza-detail.html'
})
export class PlazaDetailPage {
  plaza: any;
  event: any;

  constructor(
    private shareService: ShareService,
    public navParams: NavParams
  ) {
    this.event = this.shareService.getEventData();
    console.log("this.event", this.event.trades[0]);
    this.plaza = navParams.data;
  }
}
