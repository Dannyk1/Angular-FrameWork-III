import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserdetailsComponent } from './userdetails.component';
import { UserGuardService } from '../user-guard.service';
import { ErrorPageComponent } from './error-page.component';

const MY_ROUTES: Routes = [
  {path:'',component: UsersComponent},
  {path:'error',component: ErrorPageComponent},
  {path:':uuid',component: UserdetailsComponent, canActivate:[UserGuardService]}
];

@NgModule({
  declarations: [
    UsersComponent, UserdetailsComponent, ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MY_ROUTES)
  ],
  providers: [UserGuardService],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
