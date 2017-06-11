import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  public eventData: any;

  constructor() {  }

  setEventData(event:any):any {
    this.eventData = event;
    }

    getEventData(): any {
     return this.eventData;
    }
}
