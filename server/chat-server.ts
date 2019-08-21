import { createServer, Server } from 'http'
import * as express from 'express'
import * as socketIo from 'socket.io'

import { Message } from './model/message.model'
import { Socket } from 'dgram';

export class ChatServer {

    public static readonly PORT: number = 3000
    private app: express.Application
    private server: Server
    private io: SocketIO.Server
    private port: string | number

    constructor() {
        this.createApp()
        this.config()
        this.createServer()
        this.sockets()
        this.listen()
    }

    private createApp() {
        this.app = express()
    }

    private createServer() {
        this.server = createServer(this.app)
    }

    private config() {
        this.port = process.env.PORT || ChatServer.PORT
    }

    private sockets() {
        this.io = socketIo(this.server)
    }

    private listen() {
        this.server.listen(this.port, () => {
            console.log('Running server on port %s', this.port)
        })

        this.io.on('connect', (socket: any) => {
            console.log('Connected client on port %s', this.port)
            socket.on('message', (msg: Message) => {
                console.log('[server](message): %s', JSON.stringify(msg))
                this.io.emit('message', msg)
            })

            socket.on('disconnect', () => {
                console.log('Client disconnected')
            })
        })
    }

    public getApp() {
        return this.app
    }
}