import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AssistantProfessorsComponent } from './assistant-professors/assistant-professors.component';
import { AssociateProfessorsComponent } from './associate-professors/associate-professors.component';
import { DepartmentHeadAshComponent } from './department-head-ash/department-head-ash.component';
import { DepartmentHeadCeComponent } from './department-head-ce/department-head-ce.component';
import { DepartmentHeadCseComponent } from './department-head-cse/department-head-cse.component';
import { DepartmentHeadEeComponent } from './department-head-ee/department-head-ee.component';
import { DepartmentHeadExtcComponent } from './department-head-extc/department-head-extc.component';
import { DepartmentHeadItComponent } from './department-head-it/department-head-it.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProfessorsComponent } from './professors/professors.component';
import { RegisterHodAshComponent } from './register-hod-ash/register-hod-ash.component';
import { RegisterHodCeComponent } from './register-hod-ce/register-hod-ce.component';
import { RegisterHodCseComponent } from './register-hod-cse/register-hod-cse.component';
import { RegisterHodEeComponent } from './register-hod-ee/register-hod-ee.component';
import { RegisterHodExtcComponent } from './register-hod-extc/register-hod-extc.component';
import { RegisterHodItComponent } from './register-hod-it/register-hod-it.component';
import { RegisterprincipalComponent } from './registerprincipal/registerprincipal.component';
import { AdminGuard } from './services/guard/admin.guard';
import { AuthGuard } from './services/guard/auth.guard';
import { DepartmentHeadAshGuard } from './services/guard/department-head-ash.guard';
import { DepartmentHeadCeGuard } from './services/guard/department-head-ce.guard';
import { DepartmentHeadCseGuard } from './services/guard/department-head-cse.guard';
import { DepartmentHeadEeGuard } from './services/guard/department-head-ee.guard';
import { DepartmentHeadExtcGuard } from './services/guard/department-head-extc.guard';
import { DepartmentHeadItGuard } from './services/guard/department-head-it.guard';
import { PrincipalGuard } from './services/guard/principal.guard';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch:'full'
  },

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'registerPrincipal',
    component: RegisterprincipalComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'professors',
    component: ProfessorsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'assistant-professors',
    component: AssistantProfessorsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'associate-professors',
    component: AssociateProfessorsComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },
 
  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'adminHome',
    component: AdminhomeComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [PrincipalGuard]
  },

  {
    path: 'department_head_extc',
    component: DepartmentHeadExtcComponent,
    canActivate: [DepartmentHeadExtcGuard]
  },

  {
    path: 'department_head_ce',
    component: DepartmentHeadCeComponent,
    canActivate: [DepartmentHeadCeGuard]
  },

  {
    path: 'department_head_cse',
    component: DepartmentHeadCseComponent,
    canActivate: [DepartmentHeadCseGuard]
  },

  {
    path: 'department_head_ash',
    component: DepartmentHeadAshComponent,
    canActivate: [DepartmentHeadAshGuard]
  },

  {
    path: 'department_head_ee',
    component: DepartmentHeadEeComponent,
    canActivate: [DepartmentHeadEeGuard]
  },

  {
    path: 'department_head_it',
    component: DepartmentHeadItComponent,
    canActivate: [DepartmentHeadItGuard]
  },

  {
    path: 'register_hod_extc',
    component: RegisterHodExtcComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'register_hod_ce',
    component: RegisterHodCeComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'register_hod_cse',
    component: RegisterHodCseComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'register_hod_ash',
    component: RegisterHodAshComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'register_hod_ee',
    component: RegisterHodEeComponent,
    canActivate: [AdminGuard]
  },

  {
    path: 'register_hod_it',
    component: RegisterHodItComponent,
    canActivate: [AdminGuard]
  },

  {
    path: '**',
    component: PageNotFoundComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
