export class shareservice {

    event: any;

    constructor() {
        this.event = '';
    }

    setEventData(event) {
        this.event = event;
    }

    getEventData() {
        return this.event;
    }
}
