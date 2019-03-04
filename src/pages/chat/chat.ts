import { Component,  OnInit } from '@angular/core';
import { ApichatProvider } from '../../providers/apichat/apichat';
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
  constructor( public apiChat: ApichatProvider ) {
  }


ngOnInit() {
  console.log('haytherm')
  this.apiChat.sendMessageSocket().subscribe(res => {
    this.getMessages();
  });
this.allmsg = localStorage.getItem('message');
console.log('msg', this.allmsg)
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
    localStorage.setItem('message', JSON.stringify(this.listMessage))
    console.log('list message', this.listMessage);
  });
}
}
