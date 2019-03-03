import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatTooltipModule,
         MatSelectModule, MatCheckboxModule, MatGridListModule, MatMenuModule, MatIconModule, MatSidenavModule, MatTabsModule} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';

import { RouterModule } from '@angular/router';
import { AuthguardService } from './shared/services/authguard.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FundraiserBlogComponent } from './fundraiser-blog/fundraiser-blog.component';
import { FundraiserFormComponent } from './fundraiser-form/fundraiser-form.component';

import { UserService } from './shared/services/user.service';
import { StorageServiceModule} from 'angular-webstorage-service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { FundsListComponent } from './funds-list/funds-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
    DashboardComponent,
    FundraiserBlogComponent,
    FundraiserFormComponent,
    UserProfileComponent,
    ProfileComponent,
    FundsListComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatStepperModule,
    RouterModule.forRoot([
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'raisefund', canActivate: [AuthguardService], component: FundraiserFormComponent},
      {path: 'home', component: FundsListComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'userProf', canActivate: [AuthguardService], component: UserProfileComponent},
      {path: '**', component: IndexComponent},
    ]),
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    StorageServiceModule
  ],
  providers: [UserService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
