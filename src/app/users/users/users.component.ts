import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {UsersdataService} from '../usersdata.service';

@Component({
  selector: 'app-users',
  template: `
  <h4>Users List</h4>
  <ul *ngIf="(users$ | async)?.length">
    <li *ngFor="let user of users$ | async">
       <a [routerLink] ="[user.login.uuid]">{{user.name.title + ' ' +user.name.first + ' ' + user.name.last}}</a>
    </li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class UsersComponent implements OnInit {

  users$: Observable<any>;

  constructor(private userDataService: UsersdataService) {
  }

  ngOnInit() {
    this.users$ = this.userDataService.getCachedData();
  }

}
