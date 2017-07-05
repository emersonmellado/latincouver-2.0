import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { Facebook } from 'ionic-native';
//import { Facebook } from '@ionic-native/facebook';

import { MainPage } from '../main/main';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-user',
  templateUrl: 'login.html'
})
export class LoginPage {
  FB_APP_ID: number = 246056445514095;
  userId: any;
  login: {username?: string, password?: string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, 
    public userData: UserData) { 
    Facebook.browserInit(this.FB_APP_ID, "v2.7");
  }

  goMain(){
    this.navCtrl.push(MainPage);
  }

  doFbLogin(){
    let permissions = new Array();
    //the permissions your facebook app needs from the user
    permissions = ["public_profile"];

    console.log("Facebook:clicked");

    Facebook.login(permissions)
    .then((response: any) => {
      console.log("response", response);
      let userId = response.authResponse.userID;
      let params = new Array();
      this.userData.login(this.login.username, userId);
      this.navCtrl.push(TabsPage);      

      // //Getting name and gender properties
      // Facebook.api("/me?fields=name,gender", params)
      // .then(() => {
      //   //let user_picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
      //   //now we have the users info, let's save it in the NativeStorage

      // });
    });
    console.log("Facebook:ended");
  }  

  doFbLogout(){
    var nav = this.navCtrl;
    Facebook.logout()
    .then(function(response) {
      console.log("Facebook:LOGOUT");
      //user logged out so we will remove him from the NativeStorage
      //NativeStorage.remove('user');
      this.userData.logout();
      nav.push(LoginPage);
    }, function(error){
      console.log(error);
    });
  }  

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.username, '123');
      this.navCtrl.push(TabsPage);
    }
  }
}
