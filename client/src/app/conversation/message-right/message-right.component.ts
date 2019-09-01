import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-right',
  templateUrl: './message-right.component.html',
  styleUrls: ['./message-right.component.css']
})
export class MessageRightComponent implements OnInit {

  sender:string = "Sender"
  message:string = "Message"

  constructor() { }

  ngOnInit() {
  }

}
