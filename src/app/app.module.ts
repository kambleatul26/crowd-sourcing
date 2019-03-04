import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatTooltipModule,
         MatSelectModule, MatCheckboxModule, MatGridListModule, MatMenuModule, MatIconModule,
         MatSidenavModule, MatTabsModule, MatProgressSpinnerModule} from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';

import { RouterModule } from '@angular/router';
import { AuthguardService } from './shared/services/authguard.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index/index.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FundraiserFormComponent } from './fundraiser-form/fundraiser-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';

import { UserService } from './shared/services/user.service';
import { StorageServiceModule } from 'angular-webstorage-service';
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
    FundraiserFormComponent,
    ProfileComponent,
    FundsListComponent,
    ValidationFormComponent,
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
    MatProgressSpinnerModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatStepperModule,
    RouterModule.forRoot([
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'raisefund', canActivate: [AuthguardService], component: FundraiserFormComponent},
      {path: 'home', component: FundsListComponent},
      {path: 'userProf', canActivate: [AuthguardService], component: ProfileComponent},
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
