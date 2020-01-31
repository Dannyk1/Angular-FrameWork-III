import { Component, OnInit } from '@angular/core';
import { UsersdataService } from '../usersdata.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  template: `
  <h2>{{user?.name?.title}} {{user?.name?.first }} {{user?.name?.last}} </h2>
    <img src="{{user?.picture?.medium}}" alt="{{user?.name?.first}}">
    <p>
      <strong>Username:</strong> {{user?.login?.username}}
    </p>
    <p>
      <strong>Gender:</strong> {{user?.gender}}
    </p>
    <p>
      <strong>Email:</strong> {{user?.email}}
    </p>
    <p>
      <strong>Cell:</strong> {{user?.cell}}
    </p>
    <p>
      <strong>Country:</strong> {{user?.nat}}
    </p>
    <p>
      <strong>Age:</strong> {{user?.dob?.age}}
    </p>`
})
export class UserdetailsComponent implements OnInit {
  user:any;
  uuid: string;
  constructor(private userDataService: UsersdataService,private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.uuid = params.uuid;
    });
  }

  ngOnInit() {
    this.userDataService.getCachedData().subscribe( (users:Array<any>) => {
      this.user = users.filter(user=> user.login.uuid === this.uuid)[0];
    });
  }

}
