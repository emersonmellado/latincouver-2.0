import { Component, ViewChild } from '@angular/core';

import { AlertController, App, List, ModalController, NavController, LoadingController } from 'ionic-angular';

/*
  To learn how to use third party libs in an
  Ionic app check out our docs here: http://ionicframework.com/docs/v2/resources/third-party-libs/
  */
  // import moment from 'moment';

  import { EventData } from '../../providers/event-data';
  //import { ScheduleFilterPage } from '../schedule-filter/schedule-filter';
  //import { SessionDetailPage } from '../session-detail/session-detail';
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
    arrayOfKeys: any = [];
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

          //this.events = this.php_crud_api_transform(data);
          this.events = data;
          console.log("this.events", this.events);

        });
    }

    array_flip (trans:any) {
      var key:any, tmp_ar:any = {};
      for (key in trans) {
        tmp_ar[trans[key]] = key;
      }
      return tmp_ar;
    }

    get_objects(tables:any,table_name:any,where_index?:any,match_value?:any){
      var objects:any = [];
      for (let record in tables[table_name]['records']) {
        record = tables[table_name]['records'][record];
        console.log("record", record);
        var object:any = {};
        for (let index in tables[table_name]['columns']) {
          var column = tables[table_name]['columns'][index];

          object[column] = record[Number(index)];
          console.log("object", object);
          for (let relation in tables) {
            var reltable = tables[relation];
            for (var key in reltable['relations']) {
              var target = reltable['relations'][key];
              console.log("target", target);
              if (target == table_name+'.'+column) {
                var column_indices = this.array_flip(reltable['columns']);
                object[relation] = this.get_objects(tables,relation,column_indices[key],record[Number(index)]);
              }
            }
          }
        }
        objects.push(object);
      }
    }
    php_crud_api_transform(tables:any){
      var tree:any = {};
      for (var name in tables) {
        var table = tables[name];
        if (!table['relations']) {
          tree[name] = this.get_objects(tables,name);
          if (table['results']) {
            tree['_results'] = table['results'];
          }
        }
      }
      console.log("tree", tree);
      return tree;
    }

// function php_crud_api_transform(tables:any[]) {
//   console.log("tables", tables);
//   var array_flip = function (trans:any) {
//     var key:any, tmp_ar:any = {};
//     for (key in trans) {
//       tmp_ar[trans[key]] = key;
//     }
//     return tmp_ar;
//   };
//   var get_objects = function (tables:any,table_name:any,where_index?:any,match_value?:any) {
//     var objects:any = [];
//     for (let record in tables[table_name]['records']) {
//       record = tables[table_name]['records'][record];
//       if (!where_index || record[where_index]==match_value) {
//         var object:any = {};
//         for (let index of tables[table_name]['columns']) {
//           var column = tables[table_name]['columns'][index];
//           object[column] = record[index];
          // for (let relation in tables) {
          //   var reltable = tables[relation];
          //   for (var key in reltable['relations']) {
          //     var target = reltable['relations'][key];
          //     if (target == table_name+'.'+column) {
          //       var column_indices = array_flip(reltable['columns']);
          //       object[relation] = get_objects(tables,relation,column_indices[key],record[index]);
          //     }
          //   }
          // }
//         }
//         objects.push(object);
//       }
//     }
//     return objects;
//   };
//   var tree:any = {};
//   for (var name of tables) {
//     console.log("name", name);
//     var table = tables[name];
//     if (!table['relations']) {
//       tree[name] = get_objects(tables,name);
//       if (table['results']) {
//         tree['_results'] = table['results'];
//       }
//     }
//   }
//   return tree;
// }


}
