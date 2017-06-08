import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { LatincouverApp } from './app.component';
import { ObjectValuesPipe } from './pipes';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SchedulePage } from '../pages/schedule/schedule';
import { MainPage } from '../pages/main/main';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';

import { EventDetailPage } from '../pages/event-detail/event-detail';
import { PlazaListPage } from '../pages/plaza-list/plaza-list';

import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { VendorListPage } from '../pages/vendor-list/vendor-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SupportPage } from '../pages/support/support';

import { ConferenceData } from '../providers/conference-data';
import { EventData } from '../providers/event-data';
import { UserData } from '../providers/user-data';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import {ShareService} from '../pages/services/shareservice';

@NgModule({
  declarations: [
    LatincouverApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    MainPage,
    ScheduleFilterPage,
    SessionDetailPage,
    EventDetailPage,
    PlazaListPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    VendorListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    ObjectValuesPipe
  ],
  imports: [
    IonicModule.forRoot(LatincouverApp),
		IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LatincouverApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    PopoverPage,
    SchedulePage,
    MainPage,
    ScheduleFilterPage,
    SessionDetailPage,
    EventDetailPage,
    PlazaListPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    VendorListPage,
    TabsPage,
    TutorialPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    EventData,
    UserData,
    InAppBrowser,
    SplashScreen,
    IonicStorageModule,
    ShareService
  ]
})
export class AppModule { }
