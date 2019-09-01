import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageRightComponent } from './conversation/message-right/message-right.component';
import { MessageLeftComponent } from './conversation/message-left/message-left.component';
import { MessageInfoComponent } from './conversation/message-info/message-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    MessageRightComponent,
    MessageLeftComponent,
    MessageInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
