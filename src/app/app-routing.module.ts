import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: PageComponent},
  {path: 'aboutme', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {    
    path: 'login',    
    component: LoginComponent,    
    data: {    
      title: 'Login Page'    
    }    
  },    
  {    
    path: 'Dashboard',    
    component: DashboardComponent,    
    data: {    
      title: 'Dashboard Page'    
    }    
  },    
  {    
    path: 'AddUser',    
    component: RegisterComponent,    
    data: {    
      title: 'Add User Page'    
    }    
  },    
  {path: 'assets/Dozier_COSC_Resume_Web.pdf', redirectTo: '../assets/Dozier_COSC_Resume_Web.pdf', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
