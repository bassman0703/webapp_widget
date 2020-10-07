import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TopComponent} from './top/top.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {ka_GE} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import ka from '@angular/common/locales/ka';
import {
  NzAvatarModule, NzBadgeModule,
  NzButtonModule, NzCalendarModule, NzCardModule, NzCheckboxModule, NzCollapseModule, NzDividerModule, NzDropDownModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule, NzInputNumberModule,
  NzLayoutModule, NzListModule, NzMenuModule, NzPageHeaderModule,
  NzRadioModule, NzRateModule, NzSelectModule, NzTabsModule, NzTimelineModule, NzToolTipModule,
  NzWaveModule
} from 'ng-zorro-antd';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {ProfileComponent} from './profile/profile.component';
import {AboutComponent} from './about/about.component';
import {InfoComponent} from './about/info/info.component';
import {MyBookingsComponent} from './my-bookings/my-bookings.component';
import {BranchesComponent} from './branches/branches.component';
import {LocationComponent} from './location/location.component';
import {SingupComponent} from './singup/singup.component';
import {LoginComponent} from './login/login.component';
import { ClientComponent } from './client/client.component';
import { OnlineBookingComponent } from './online-booking/online-booking.component';
import { SpecialistComponent } from './specialist/specialist.component';
import { ServiceComponent } from './service/service.component';
import { DataComponent } from './data/data.component';
import { TeamComponent } from './team/team.component';
import { ChooseComponent } from './choose/choose.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimeComponent } from './time/time.component';
import {BookingComponent} from './booking/booking.component';
import { UserComponent } from './user/user.component';
import { PasswordComponent } from './password/password.component';


registerLocaleData(ka);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    FooterComponent,
    LayoutComponent,
    ProfileComponent,
    AboutComponent,
    InfoComponent,
    MyBookingsComponent,
    BranchesComponent,
    LocationComponent,
    SingupComponent,
    LoginComponent,
    ClientComponent,
    OnlineBookingComponent,
    SpecialistComponent,
    ServiceComponent,
    DataComponent,
    TeamComponent,
    ChooseComponent,
    CalendarComponent,
    TimeComponent,
    BookingComponent,
    UserComponent,
    PasswordComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzGridModule,
    NzRadioModule,
    NzWaveModule,
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzTabsModule,
    NzRateModule,
    NzCardModule,
    NzDividerModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzToolTipModule,
    NzInputNumberModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzAvatarModule,
    NzCollapseModule,
    NzDropDownModule,
    NzListModule,
    NzTimelineModule,
    NzCalendarModule,
    NzBadgeModule
  ],
  providers: [{provide: NZ_I18N, useValue: ka_GE}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
