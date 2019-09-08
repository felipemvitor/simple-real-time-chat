import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-left',
  templateUrl: './message-left.component.html',
  styleUrls: ['./message-left.component.css']
})
export class MessageLeftComponent implements OnInit {

  @Input() sender: string = ""
  @Input() message: string = ""

  constructor() { }

  ngOnInit() {
  }

}
