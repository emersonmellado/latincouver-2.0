import { Component  } from '@angular/core';
import { NavParams, Nav, NavController } from 'ionic-angular';
//import { TabsPage } from '../tabs/tabs';

import { PlazaDetailPage } from '../plaza-detail/plaza-detail';

@Component({
  selector: 'page-plaza-list',
  templateUrl: 'plaza-list.html'
})
export class PlazaListPage {
  event: any;
  plaza: any;

  constructor(
    public navParams: NavParams,
    public nav: Nav,
    public navCtrl: NavController
  ) {
    this.event = navParams.data;
  }

  goToPlazaDetail(plaza: any) {
    this.navCtrl.push(PlazaDetailPage, plaza);
  }
}
