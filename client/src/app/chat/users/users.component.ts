import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { ChatService } from 'src/app/chat-service.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: any = []

    constructor(public chatService: ChatService) { }

    ngOnInit() {
        console.log('Listening to server')
        this.chatService.onLoginComplete().subscribe(users => {
            console.log('User connected.')
            this.users = users
        })

        this.chatService.onNewUserConnected().subscribe(user => {
            console.log('New user connected.')
            this.users.push(user)
        })
    }

}
