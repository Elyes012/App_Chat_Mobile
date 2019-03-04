import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
/*
  Generated class for the ApichatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApichatProvider {
  api_url: string = 'http://ec2-18-233-8-147.compute-1.amazonaws.com:8700/'
  constructor(public http: HttpClient, public socket: Socket) {
    console.log('Hello ApichatProvider Provider');
  }
  getAllmessage() {
    console.log('my messages')
    return this.http.get( this.api_url + 'api/allMessages');
  }
  insertMessage(data) {
    return this.http.post(this.api_url + 'api/sendMessage', data);
  }
  getMessageSocket() {
    return this.socket.fromEvent('message received successfully');
  }
  sendMessageSocket() {
    return  this.socket.fromEvent('message sent');
  }
}
