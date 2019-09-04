import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './users/dialog/dialog.component';
import { ChatService } from '../chat-service.service';
import { User } from '../user.model';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

    user:User

    constructor(public dialog: MatDialog, public chatService: ChatService) { }

    ngOnInit() {

        if (!this.user) {
            this.showUsernameDialog()
        }
    }

    private showUsernameDialog() {
        const dialogRef = this.dialog.open(DialogComponent, {width: '400px'})

        dialogRef.afterClosed().subscribe(result => {
            console.log('Username: ' + result)
            this.user = new User(result)

            if(!this.user){
                this.showUsernameDialog()
            }else{
                this.chatService.login(this.user)
            }
        })
    }

}
