import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { LatincouverApp } from './app.component';
import { ObjectValuesPipe } from './pipes';

import { LoginPage } from '../pages/login/login';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { MapPage } from '../pages/map/map';
import { MainPage } from '../pages/main/main';

import { EventDetailPage } from '../pages/event-detail/event-detail';
import { PlazaListPage } from '../pages/plaza-list/plaza-list';
import { PlazaDetailPage } from '../pages/plaza-detail/plaza-detail';

import { TradeListPage } from '../pages/trade-list/trade-list';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';

import { ConferenceData } from '../providers/conference-data';
import { EventData } from '../providers/event-data';
import { UserData } from '../providers/user-data';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

// import {ShareService} from '../services/ShareService';

@NgModule({
  declarations: [
    LatincouverApp,
    LoginPage,
    AboutPage,
    MapPage,
    PopoverPage,
    MainPage,
    EventDetailPage,
    PlazaListPage,
    PlazaDetailPage,
    TradeListPage,
    TabsPage,
    TutorialPage,
    ObjectValuesPipe
  ],
  imports: [
    IonicModule.forRoot(LatincouverApp),
		IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LatincouverApp,
    LoginPage,
    AboutPage,
    MapPage,
    PopoverPage,
    MainPage,
    EventDetailPage,
    PlazaListPage,
    PlazaDetailPage,
    TradeListPage,
    TabsPage,
    TutorialPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    EventData,
    UserData,
    InAppBrowser,
    SplashScreen,
    IonicStorageModule
  ]
})
export class AppModule { }
