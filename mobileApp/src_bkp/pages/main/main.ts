import { Component, ViewChild, Injectable } from '@angular/core';

import { Nav, AlertController, App, List, ModalController, NavController, LoadingController, MenuController } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';

import { EventData } from '../../providers/event-data';
//import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
//import { SessionDetailPage } from '../session-detail/session-detail';
import { PlazaListPage } from '../plaza-list/plaza-list';
import { UserData } from '../../providers/user-data';

import { Events } from 'ionic-angular';

import { ShareService } from '../../services/ShareService';

@Injectable()
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
  tabBarElement: any;

  constructor(
    private shareService: ShareService,
    public appEvents: Events,
    public menu: MenuController,
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public eventData: EventData,
    public user: UserData,
    public storage: IonicStorageModule,
    public nav: Nav
    ) {
    console.log("nav", this.nav.rootParams.operator.thisArg.data);
  }

  ionViewDidEnter() {
    this.hideTabBar();
  }

  ionViewDidLeave() {
    this.showTabBar();
  }

  ionViewDidLoad() {
    this.app.setTitle('Main');
    this.updateSchedule();
  }

  hideTabBarButton() {
  }

  showTabBar(){
    let tabs:any = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[Number(key)].style.transform = 'translateY(0)';
      });
    }

    let scroll_content:any = document.querySelectorAll('.scroll-content');
    if ( scroll_content !== null ){
      Object.keys(scroll_content).map((key) => {
        scroll_content[Number(key)].style.marginBottom = '56px';
      });
    }
  }

  hideTabBar(){
    let tabs:any = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[Number(key)].style.transform = 'translateY(56px)';
      });
    }

    let scroll_content:any = document.querySelectorAll('.scroll-content');
    if ( scroll_content !== null ){
      Object.keys(scroll_content).map((key) => {
        scroll_content[Number(key)].style.marginBottom = '0px';
      });
    }
  }

  updateSchedule() {
    this.eventData.getData().subscribe((data: any) => {

        this.events = data.events;
        this.settings = data.settings[0];
        //this.goToEventDetail(this.events[0]);

        this.hideTabBar();
      });
  }

  goToEventDetail(event: any) {
    this.appEvents.publish('load:event');
    this.shareService.setEventData(event);
    this.navCtrl.push(PlazaListPage, event);
  }
}
