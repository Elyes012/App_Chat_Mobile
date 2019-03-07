import { Component,  OnInit } from '@angular/core';
import { ApichatProvider } from '../../providers/apichat/apichat';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage implements OnInit{
  listMessage: any;
  messageChat: string;
  person: string;
  invalidUser: string;
  allmsg;
  constructor( public apiChat: ApichatProvider, private oneSignal: OneSignal) {
    this.oneSignal.startInit('353e0e1c-a069-4443-a8d0-135e90ea1377', '1056517509247');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe(() => {
  console.log('recevied') // do something when notification is received
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
  console.log('unrecevied')
});

this.oneSignal.endInit();
  }


ngOnInit() {
  this.apiChat.sendMessageSocket().subscribe(res => {
    this.getMessages();
  });
  this.getMessages();


}
sendMessage() {
  const data = {
    user: this.person,
    message: this.messageChat,
    status: 'unseen',
    date: Date.now()
  };
  console.log('mydata', data);
  if (data.user === 'livreur' || data.user === 'client') {
    this.apiChat.insertMessage(data).subscribe(res => {
    });
  } else {
    this.invalidUser = 'invalid user';
  }
}
getMessages() {
  this.apiChat.getAllmessage().subscribe(res => {
    this.listMessage = res;
  });
}


}
