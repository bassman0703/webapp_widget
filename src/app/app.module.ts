import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TopComponent} from './top/top.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {ka_GE} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import ka from '@angular/common/locales/ka';
import {
  NzButtonModule, NzCardModule, NzCheckboxModule, NzDividerModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzLayoutModule,
  NzRadioModule, NzRateModule, NzTabsModule,
  NzWaveModule
} from 'ng-zorro-antd';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './about/info/info.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BranchesComponent } from './branches/branches.component';
import { LocationComponent } from './location/location.component';

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
    NzDividerModule
  ],
  providers: [{provide: NZ_I18N, useValue: ka_GE}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
