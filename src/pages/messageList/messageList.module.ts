import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageListPage } from './messageList';

@NgModule({
  declarations: [
    MessageListPage,
  ],
  imports: [
    IonicPageModule.forChild(MessageListPage),
  ],
})
export class MessageListPageModule {}
