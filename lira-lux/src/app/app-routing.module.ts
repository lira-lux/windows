import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';


const routes: Routes = [
  {
    path: 'admin-lira-lux-2020', component: AdminComponent
    // canActivate
    },
  {
    path: '', component: UserComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
