import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Network} from '@ionic-native/network';

import { ChatPage } from '../chat/chat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {

  constructor(public navCtrl: NavController, private toast: ToastController, private network: Network ) {
this.network.onConnect().subscribe(() => {
  this.toast.create({
    message: 'network connected',
    duration: 3000,
  }).present();
});

this.network.onDisconnect().subscribe(() => {
  this.toast.create({
    message: 'disconnected',
    duration: 3000,
  }).present();
})
  }


  goTochat() {
    this.navCtrl.push(ChatPage);
  }
}
