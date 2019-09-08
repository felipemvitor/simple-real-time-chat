import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-right',
  templateUrl: './message-right.component.html',
  styleUrls: ['./message-right.component.css']
})
export class MessageRightComponent implements OnInit {

  @Input() sender: string = ""
  @Input() message: string = ""

  constructor() { }

  ngOnInit() {
  }

}
