import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AssociateProfessorsComponent } from './associate-professors/associate-professors.component';
import { AssistantProfessorsComponent } from './assistant-professors/assistant-professors.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { authInterceptorProviders } from './services/Auth/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegisterprincipalComponent } from './registerprincipal/registerprincipal.component';
import { DepartmentHeadExtcComponent } from './department-head-extc/department-head-extc.component';
import { DepartmentHeadCeComponent } from './department-head-ce/department-head-ce.component';
import { DepartmentHeadCseComponent } from './department-head-cse/department-head-cse.component';
import { DepartmentHeadAshComponent } from './department-head-ash/department-head-ash.component';
import { DepartmentHeadEeComponent } from './department-head-ee/department-head-ee.component';
import { DepartmentHeadItComponent } from './department-head-it/department-head-it.component';
import { RegisterHodAshComponent } from './register-hod-ash/register-hod-ash.component';
import { RegisterHodItComponent } from './register-hod-it/register-hod-it.component';
import { RegisterHodCeComponent } from './register-hod-ce/register-hod-ce.component';
import { RegisterHodCseComponent } from './register-hod-cse/register-hod-cse.component';
import { RegisterHodExtcComponent } from './register-hod-extc/register-hod-extc.component';
import { RegisterHodEeComponent } from './register-hod-ee/register-hod-ee.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfessorsComponent,
    AssociateProfessorsComponent,
    AssistantProfessorsComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    ProfileComponent,
    AdminhomeComponent,
    AdminregisterComponent,
    PrincipalComponent,
    RegisterprincipalComponent,
    DepartmentHeadExtcComponent,
    DepartmentHeadCeComponent,
    DepartmentHeadCseComponent,
    DepartmentHeadAshComponent,
    DepartmentHeadEeComponent,
    DepartmentHeadItComponent,
    RegisterHodAshComponent,
    RegisterHodItComponent,
    RegisterHodCeComponent,
    RegisterHodCseComponent,
    RegisterHodExtcComponent,
    RegisterHodEeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
