import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { AgGridModule } from 'ag-grid-angular';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { UserIdleModule } from 'angular-user-idle';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TimeoutComponent } from './timeout/timeout.component';
import { CellEditorComponent } from './cell-editor/cell-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CellEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
    UserIdleModule.forRoot({idle: 600, timeout: 300, ping: 15}),
    AgGridModule.withComponents(
      [
        CellEditorComponent,
      ]
    )
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
