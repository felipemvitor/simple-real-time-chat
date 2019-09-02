import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    new User("User 1"),
    new User("User 2"),
    new User("User 3")
  ]

  constructor() { }

  ngOnInit() {
  }

}
