import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat-service.service';
import { Message } from 'src/app/message.model';
import { MessageType } from '../message-type.model';

@Component({
    selector: 'app-conversation',
    templateUrl: './conversation.component.html',
    styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

    messages = []

    constructor(public chatService: ChatService) { }

    ngOnInit() {
        this.chatService.onNewUserConnected().subscribe(user => {
            console.log(`User: ${user.name}`)
            this.chatService.sendMessage(new Message(user, MessageType.TEXT, "text"))
        })
    }

}
