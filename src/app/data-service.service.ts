import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
 URL: string = 'https://randomuser.me/api/?resuts=10';
  userSubscription: any;
  constructor(public http: HttpClient) { }

  getOnlineData() {

    this.http.get(this.URL).subscribe(response =>{
if(response['results'].length) {
  let users = response['results'];
  // tslint:disable-next-line: one-variable-per-declaration
  let userIds : Array<string> =[];
  for(let user of users){
    userIds.push(user.login.userId);
  }
  const stringifiedUsersRecords = JSON.stringify(users);
  const stringifiedUsersuserIds = JSON.stringify(userIds);
  localStorage.setItem("users", stringifiedUsersRecords);
  localStorage.setItem("userIds", stringifiedUsersuserIds);
}

    });


  }



  getCachedData(): Observable<any> {
    if(localStorage.length){
      let users = localStorage.getItem("users");
      return of(JSON.parse(users));
    }
  }

  ngOnDestroy(){

    localStorage.removeItem("users");
    localStorage.removeItem("userIds");
    this.userSubscription.unsubscribe();
    console.log('service destroyed ')
  }
}
