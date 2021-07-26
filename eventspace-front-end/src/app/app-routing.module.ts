import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/components-admin/admin-panel/admin-panel.component';
import { ListUserComponent } from './components/components-admin/list-user/list-user.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListFavoriteEventsComponent } from './components/list-favorite-events/list-favorite-events.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './security/auth.guard';
import { RoleGuard } from './security/role.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'list-favorite-event', component: ListFavoriteEventsComponent},
  {path: 'adminpanel', component: AdminPanelComponent, canActivate: [AuthGuard, RoleGuard],
    children: [
      {path: 'listuser', component: ListUserComponent, canActivate: [AuthGuard, RoleGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
