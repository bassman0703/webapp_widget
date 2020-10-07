import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LayoutComponent} from './layout/layout.component';
import {FooterComponent} from './footer/footer.component';
import {ProfileComponent} from './profile/profile.component';
import {AboutComponent} from './about/about.component';
import {InfoComponent} from './about/info/info.component';
import {MyBookingsComponent} from './my-bookings/my-bookings.component';
import {BranchesComponent} from './branches/branches.component';
import {LocationComponent} from './location/location.component';
import {SingupComponent} from './singup/singup.component';
import {ClientComponent} from './client/client.component';
import {OnlineBookingComponent} from './online-booking/online-booking.component';
import {TeamComponent} from './team/team.component';
import {ChooseComponent} from './choose/choose.component';
import {CalendarComponent} from './calendar/calendar.component';
import {TimeComponent} from './time/time.component';
import {BookingComponent} from './booking/booking.component';
import {UserComponent} from './user/user.component';
import {PasswordComponent} from './password/password.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'info',
        component: InfoComponent
      },
      {
        path: 'my-bookings',
        component: MyBookingsComponent
      },
      {
        path: 'branches',
        component: BranchesComponent
      },
      {
        path: 'location',
        component: LocationComponent
      },
      {
        path: 'singup',
        component: SingupComponent
      },
      {
        path: 'client',
        component: ClientComponent
      },
      {
        path: 'online-booking',
        component: OnlineBookingComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'choose',
        component: ChooseComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      },
      {
        path: 'time',
        component: TimeComponent
      },
      {
        path: 'booking',
        component: BookingComponent
      },
      {
        path: 'user',
        component : UserComponent
      },
      {
        path: 'password',
        component: PasswordComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
