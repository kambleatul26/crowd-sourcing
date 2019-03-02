import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatTooltipModule,
         MatSelectModule, MatCheckboxModule, MatGridListModule, MatMenuModule, MatIconModule} from '@angular/material';
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
    MatCheckboxModule,
    MatStepperModule,
    RouterModule.forRoot([
      {path: 'home', component: IndexComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'login', component: LoginComponent},
      {path: 'raisefund', canActivate: [AuthguardService], component: FundraiserFormComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: '**', component: IndexComponent},
    ]),
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    StorageServiceModule
  ],
  providers: [UserService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
