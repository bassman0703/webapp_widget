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
        path:'about',
        component:AboutComponent
      },
      {
        path:'info',
        component:InfoComponent
      },
      {
        path:'my-bookings',
        component:MyBookingsComponent
      },
      {
        path:'branches',
        component:BranchesComponent
      },
      {
        path:'location',
        component:LocationComponent
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
