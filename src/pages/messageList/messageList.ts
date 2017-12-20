import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-messageList',
  templateUrl: 'messageList.html',
})
export class MessageListPage {

  todayMessageList = [
    {
      user: 'user 1',
      userImgPath: '../assets/icon/user.jpg',
      messageContext: 'message 1!aaaaaaaaaaaa',
      messageTimestamp: '1:34 pm' // TODO: change to pipe
    },
    {
      user: 'user 2',
      userImgPath: '../assets/icon/user.jpg',
      messageContext: 'message 2!aaaaaaaaaaaa',
      messageTimestamp: '2:34 pm'
    },
    {
      user: 'user 3',
      userImgPath: '../assets/icon/user.jpg',
      messageContext: 'message 3!aaaaaaaaaaaa',
      messageTimestamp: '3:34 pm'
    },
  ];

  lastMessageList = [
    {
      user: 'user 1',
      userImgPath: '../assets/icon/user.jpg',
      messageContext: 'message 1!aaaaaaaaaaaa',
      messageTimestamp: '2017/12/17 9:34' // TODO: change to pipe
    },
    {
      user: 'user 2',
      userImgPath: '../assets/icon/user.jpg',
      messageContext: 'message 2!aaaaaaaaaaaa',
      messageTimestamp: '2017/12/16 2:34'
    },
    {
      user: 'user 3',
      userImgPath: '../assets/icon/user.jpg',
      messageContext: 'message 3!aaaaaaaaaaaa',
      messageTimestamp: '2017/12/12 23:34'
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
