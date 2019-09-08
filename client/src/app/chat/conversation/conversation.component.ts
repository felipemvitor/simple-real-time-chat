import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from 'src/app/chat-service.service';
import { Message } from 'src/app/message.model';
import { MessageType } from '../message-type.model';
import { User } from 'src/app/user.model';
import { Globals } from 'src/app/globals';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  messages = []
  messageType = MessageType
  @Input() message = ""

  constructor(public chatService: ChatService, public globals: Globals) { }

  ngOnInit() {
    this.chatService.onNewUserConnected().subscribe(user => {
      console.log(`User: ${user.name}`)
      this.messages.push(new Message(user, MessageType.NEW_USER, `${user.name} joined the group.`))
    })
    this.chatService.onMessageSent().subscribe(message => {
      var messageSent = JSON.parse(message)
      console.log(`Message sent: ${JSON.parse(message).user.name}`)
      this.messages.push(new Message(messageSent.user, MessageType.SENT, messageSent.msg))
    })

    this.chatService.onMessageReceived().subscribe(message => {
      var messageReceived = JSON.parse(message)
      console.log(`Message received: ${message}`)
      this.messages.push(new Message(messageReceived.user, MessageType.RECEIVED, messageReceived.msg))
    })
  }

  sendMessage() {
    if(this.message !== ''){
      console.log("Message: " + this.message)
      this.chatService.sendMessage(
        new Message(
          this.globals.user,
          null,
          this.message
        )
      )
      this.message = ''
    }
  }

  getClass(type){
    if(type == this.messageType.SENT) return 'message-sent'
    if(type == this.messageType.RECEIVED) return 'message-received'
    return ''
  }
}
