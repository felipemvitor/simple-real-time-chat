import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { ConversationComponent } from './chat/conversation/conversation.component';
import { MessageRightComponent } from './chat/conversation/message-right/message-right.component';
import { MessageLeftComponent } from './chat/conversation/message-left/message-left.component';
import { MessageInfoComponent } from './chat/conversation/message-info/message-info.component';
import { UsersComponent } from './chat/users/users.component';
import { DialogComponent } from './chat/users/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'

import {
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        ConversationComponent,
        MessageRightComponent,
        MessageLeftComponent,
        MessageInfoComponent,
        UsersComponent,
        ChatComponent,
        DialogComponent
    ],
    entryComponents: [
        DialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
