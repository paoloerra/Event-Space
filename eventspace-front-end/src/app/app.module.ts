import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminPanelComponent } from './components/components-admin/admin-panel/admin-panel.component';
import { ListUserComponent } from './components/components-admin/list-user/list-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEventComponent } from './components/components-admin/add-event/add-event.component';
import { GridEventComponent } from './components/grid-event/grid-event.component';
import { AuthGuard } from './security/auth.guard';
import { ListEventComponent } from './components/components-admin/list-event/list-event.component';
import { FilterEventPipe } from './pipe/filter-event.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListFavoriteEventsComponent } from './components/list-favorite-events/list-favorite-events.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CookieComponent } from './cookie/cookie.component';
import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';

const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    AdminPanelComponent,
    ListUserComponent,
    NavbarComponent,
    AddEventComponent,
    GridEventComponent,
    ListEventComponent,
    FilterEventPipe,
    ListFavoriteEventsComponent,
    CookieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
