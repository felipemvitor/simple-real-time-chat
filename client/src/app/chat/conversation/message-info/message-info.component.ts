import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-info',
  templateUrl: './message-info.component.html',
  styleUrls: ['./message-info.component.css']
})
export class MessageInfoComponent implements OnInit {

  info: string = "Info"

  constructor() { }

  ngOnInit() {
  }

}
