import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { NativeStorage } from '@ionic-native/native-storage';

import { Storage } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
// import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
// import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { SchedulePage } from '../pages/schedule/schedule';
import { MainPage } from '../pages/main/main';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
// import { SupportPage } from '../pages/support/support';

//import { ConferenceData } from '../providers/conference-data';
import { EventData } from '../providers/event-data';
import { UserData } from '../providers/user-data';

import { ShareService } from '../services/ShareService';

export interface PageInterface {
  title: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html',
  providers: [ShareService]
})
export class LatincouverApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  appPages: PageInterface[] = [
    { title: 'Main', component: TabsPage, tabComponent: MainPage, icon: 'calendar' },
    { title: 'Speakers', component: TabsPage, tabComponent: SpeakerListPage, index: 1, icon: 'contacts' },
    { title: 'Map', component: TabsPage, tabComponent: MapPage, index: 2, icon: 'map' },
    { title: 'About', component: TabsPage, tabComponent: AboutPage, index: 3, icon: 'information-circle' }
  ];
  rootPage: any;
  eventActive: any;
  event: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    //public confData: ConferenceData,
    public eventData: EventData,
    public storage: Storage,
    public splashScreen: SplashScreen
    ) {

    // Check if the user has already seen the tutorial
    this.storage.get('hasSeenTutorial')
    .then((hasSeenTutorial) => {
      // hasSeenTutorial = false;
      console.log("hasSeenTutorial", hasSeenTutorial);
      if (hasSeenTutorial) {
        //this.rootPage = MainPage;
        this.rootPage = TabsPage;
      } else {
        this.rootPage = TutorialPage;
      }
      this.platformReady()
    })

    // load the conference data
    var data = eventData.load();
    this.event = data;

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });

    this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, { tabIndex: page.index }).catch(() => {
        console.log("Didn't set nav root");
      });
    } else {
      this.nav.setRoot(page.component).catch(() => {
        console.log("Didn't set nav root");
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      setTimeout(() => {
        this.userData.logout();
      }, 1000);
    }
  }

  openTutorial() {
    this.nav.setRoot(TutorialPage);
  }

  listenToLoginEvents() {
    this.events.subscribe('load:event', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNav();

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().component === page.component) {
      return 'primary';
    }
    return;
  }
}
