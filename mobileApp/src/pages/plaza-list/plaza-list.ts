import { Component  } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-plaza-list',
  templateUrl: 'plaza-list.html'
})
export class PlazaListPage {
  event: any;

  constructor(public navParams: NavParams) {
    this.event = navParams.data;
  }
}
