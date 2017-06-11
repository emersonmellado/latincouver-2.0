import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-plaza-detail',
  templateUrl: 'plaza-detail.html'
})
export class PlazaDetailPage {
  plaza: any;

  constructor(public navParams: NavParams) {
    this.plaza = navParams.data;
  }
}
