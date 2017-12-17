import { Component } from '@angular/core';

import { PopularPage } from '../popular/popular';
import { SelfPage } from '../self/self';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabRoots = [
    {
      root: HomePage,
      tabTitle: '主页',
      tabIcon: 'home'
    },
    {
      root: PopularPage,
      tabTitle: '社区',
      tabIcon: 'browsers'
    },
    {
      root: MessagePage,
      tabTitle: '消息',
      tabIcon: 'chatbubbles'
    },
    {
      root: SelfPage,
      tabTitle: '个人',
      tabIcon: 'person'
    }
  ];
  
  constructor() {

  }
}
