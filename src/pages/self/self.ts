import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-self',
  templateUrl: 'self.html'
})
export class SelfPage {

  _userImgPath = '../assets/icon/user.jpg';
  _condPoprCount: number|string = 103;
  _likedPoprCount: number|string = 5;
  settingPage = SettingPage;
  constructor(public navCtrl: NavController) {

  }

  openModal() {
    console.log('navbar button click!');
  }

  ionViewDidEnter(){
    this._condPoprCount = this._condPoprCount > 99 ? '99+' : this._condPoprCount;
    this._likedPoprCount = this._likedPoprCount > 99 ? '99+' : this._likedPoprCount;
  }

}
