import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-message-info',
	templateUrl: './message-info.component.html',
	styleUrls: ['./message-info.component.css']
})
export class MessageInfoComponent implements OnInit {

	@Input() info: string

	constructor() { }

	ngOnInit() {
	}

}
