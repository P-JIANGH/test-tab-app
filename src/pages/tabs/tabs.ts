import { Component } from '@angular/core';

import { PopularPage } from '../popular/popular';
import { SelfPage } from '../self/self';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  HomePageRoot = HomePage;
  PopularPageRoot = PopularPage;
  MessagePageRoot = MessagePage;
  SelfPageRoot = SelfPage;

  constructor() {

  }
}
