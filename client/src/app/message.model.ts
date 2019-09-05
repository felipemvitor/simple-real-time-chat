import { User } from './user.model';
import { MessageType } from './chat/message-type.model';

export class Message {
    constructor(public user: User, public type: MessageType, public msg: any) { }
}