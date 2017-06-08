import { Component } from '@angular/core';

import { Nav, NavParams, ActionSheet, ActionSheetController, Config, NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//import { ConferenceData } from '../../providers/conference-data';
// import { SessionDetailPage } from '../session-detail/session-detail';
// import { SpeakerDetailPage } from '../speaker-detail/speaker-detail';

import { EventData } from '../../providers/event-data';


@Component({
  selector: 'page-vendor-list',
  templateUrl: 'vendor-list.html'
})
export class VendorListPage {
  actionSheet: ActionSheet;
  events: any[] = [];

  constructor(
    public navParams: NavParams,
    public nav: Nav,
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public eventData: EventData,
    public config: Config,
    public inAppBrowser: InAppBrowser
  ) {
    console.log("navParams.data", this.navParams);
    console.log("nav", this.nav);
  }

  ionViewDidLoad() {
    // this.confData.getSpeakers().subscribe((speakers: any[]) => {
    //   this.speakers = speakers;
    // });
    this.eventData.getData().subscribe((data: any) => {

      this.events = data.events;
      // this.settings = data.settings[0];
      // //this.goToEventDetail(this.events[0]);
      // this.hideTabBar();
    });
  }

  // goToSessionDetail(session: any) {
  //   this.navCtrl.push(SessionDetailPage, session);
  // }

  // goToSpeakerDetail(speakerName: any) {
  //   this.navCtrl.push(SpeakerDetailPage, speakerName);
  // }

  // goToSpeakerTwitter(speaker: any) {
  //   this.inAppBrowser.create(`https://twitter.com/${speaker.twitter}`, '_blank');
  // }

  // openSpeakerShare(speaker: any) {
  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Share ' + speaker.name,
  //     buttons: [
  //       {
  //         text: 'Copy Link',
  //         handler: ($event: Event) => {
  //           console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
  //           if ((window as any)['cordova'] && (window as any)['cordova'].plugins.clipboard) {
  //             (window as any)['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
  //           }
  //         }
  //       },
  //       {
  //         text: 'Share via ...'
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });

  //   actionSheet.present();
  // }

  // openContact(speaker: any) {
  //   let mode = this.config.get('mode');

  //   let actionSheet = this.actionSheetCtrl.create({
  //     title: 'Contact ' + speaker.name,
  //     buttons: [
  //       {
  //         text: `Email ( ${speaker.email} )`,
  //         icon: mode !== 'ios' ? 'mail' : null,
  //         handler: () => {
  //           window.open('mailto:' + speaker.email);
  //         }
  //       },
  //       {
  //         text: `Call ( ${speaker.phone} )`,
  //         icon: mode !== 'ios' ? 'call' : null,
  //         handler: () => {
  //           window.open('tel:' + speaker.phone);
  //         }
  //       }
  //     ]
  //   });

  //   actionSheet.present();
  //}
}
