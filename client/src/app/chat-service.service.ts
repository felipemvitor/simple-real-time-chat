import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client'
import { User } from './user.model';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:3000'

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private socket: SocketIOClient.Socket

    constructor() {
        this.socket = socketIo(SERVER_URL)
    }

    login(user: User) {
        this.socket.emit('login', user)
    }

    onLoginComplete(): Observable<User> {
        return new Observable<User>((observer) => {
            this.socket.on('login', (users: any) => {
                observer.next(users)
            })
        })
    }

    onNewUserConnected(): Observable<User> {
        return new Observable<User>((observer) => {
            this.socket.on('new-user', (user: User) => {
                observer.next(user)
            })
        })
    }
}
