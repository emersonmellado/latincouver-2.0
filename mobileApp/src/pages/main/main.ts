import { Component, ViewChild } from '@angular/core';

import { AlertController, App, FabContainer, ItemSliding, List, ModalController, NavController, LoadingController } from 'ionic-angular';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
*/
// import moment from 'moment';

import { EventData } from '../../providers/event-data';
import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
import { SessionDetailPage } from '../session-detail/session-detail';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  // the list is a child of the schedule page
  // @ViewChild('scheduleList') gets a reference to the list
  // with the variable #scheduleList, `read: List` tells it to return
  // the List and not a reference to the element
  @ViewChild('mainList', { read: List }) mainList: List;

  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  events: any = [];
  groups: any = [];
  confDate: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public eventData: EventData,
    public user: UserData,
  ) {}

  ionViewDidLoad() {
    this.app.setTitle('Main');
    this.updateSchedule();
  }

  updateSchedule() {
    this.eventData.getData().subscribe((data: any) => {
      this.events = data;
      console.log("this.events", this.events);
    });
    
    // Close any open sliding items when the schedule updates
    // this.mainList && this.mainList.closeSlidingItems();

    // this.eventData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
    //   this.shownSessions = data.shownSessions;
    //   this.attr = data.attributes;
    // });
  }

  // presentFilter() {
  //   let modal = this.modalCtrl.create(ScheduleFilterPage, this.excludeTracks);
  //   modal.present();

  //   modal.onWillDismiss((data: any[]) => {
  //     if (data) {
  //       this.excludeTracks = data;
  //       this.updateSchedule();
  //     }
  //   });

  // }

  // goToSessionDetail(sessionData: any) {
  //   // go to the session detail page
  //   // and pass in the session data
  //   this.navCtrl.push(SessionDetailPage, sessionData);
  // }

  // openSocial(network: string, fab: FabContainer) {
  //   let loading = this.loadingCtrl.create({
  //     content: `Posting to ${network}`,
  //     duration: (Math.random() * 1000) + 500
  //   });
  //   loading.onWillDismiss(() => {
  //     fab.close();
  //   });
  //   loading.present();
  // }
}
