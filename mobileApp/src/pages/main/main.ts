import { Component, ViewChild } from '@angular/core';

import { AlertController, App, List, ModalController, NavController, LoadingController, MenuController } from 'ionic-angular';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
  */
  // import moment from 'moment';

  import { EventData } from '../../providers/event-data';
  //import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
  //import { SessionDetailPage } from '../session-detail/session-detail';
  import { EventDetailPage } from '../event-detail/event-detail';
  import { UserData } from '../../providers/user-data';

  import { Events } from 'ionic-angular';


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
    settings: any = [];
    arrayOfKeys: any = [];
    groups: any = [];
    confDate: string;

    constructor(
      public appEvents: Events,
      public menu: MenuController,
      public alertCtrl: AlertController,
      public app: App,
      public loadingCtrl: LoadingController,
      public modalCtrl: ModalController,
      public navCtrl: NavController,
      public eventData: EventData,
      public user: UserData,
      ) { }

    ionViewDidLoad() {
      this.app.setTitle('Main');
      this.updateSchedule();      
    }

    updateSchedule() {
      this.eventData.getData().subscribe((data: any) => {
          
          this.events = data.events;
          this.settings = data.settings[0];
          //this.goToEventDetail(this.events[0]);
          
        });
    }

  goToEventDetail(event: any) {
    // go to the session detail page
    // and pass in the session data
    // this.appEvents.publish('user:login');
    // this.navCtrl.push(EventDetailPage, event);
    //this.appEvents.publish('user:login');
    this.menu.enable(true, 'loggedInMenu');
    //return new Promise(resolve => {
      
      this.navCtrl.push(EventDetailPage, event);
    //  });
  }    
}
