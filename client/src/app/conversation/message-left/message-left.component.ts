import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-left',
  templateUrl: './message-left.component.html',
  styleUrls: ['./message-left.component.css']
})
export class MessageLeftComponent implements OnInit {

  sender:string = "Sender"
  message:string = "Message"

  constructor() { }

  ngOnInit() {
  }

}
