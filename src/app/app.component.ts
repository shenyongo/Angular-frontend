import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { Keepalive } from '@ng-idle/keepalive';
import { EventTargetInterruptSource, Idle } from '@ng-idle/core';
import { UserIdleModule, UserIdleService } from 'angular-user-idle';
import { NavbarService } from './navbar.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  timeStart:Boolean = false;
  seconds = 15;
  resume = "assets/Dozier_COSC_Resume_Web.pdf";
  clientX = 0;
  clientY = 0;
  private _sessionId: string;

  constructor(private cookie: CookieService, private userIdle: UserIdleService, private nav: NavbarService, private auth: AuthService, private router:Router) {
  }

  public sessionId() {
    this.cookie.set("userid", "12345");
    this.cookie.set("usertype", "Internal");
    

    alert("User with id (" + this.cookie.get("userid") + ") successfull");
  }
  
  ngOnInit()
  {
    if(!this.getStatus())
    {
      this.timeStart = false;
      this.auth.logout();
      this.router.navigate(['']);
    }
    else{
      this.sessionId();
      this.userIdle.startWatching();
      //debugger;
      this.userIdle.onTimerStart().subscribe(count => {this.seconds = this.seconds -1; this.timeStart = true; });
      //debugger;
      this.userIdle.onTimeout().subscribe(() => {this.logout();});
      //debugger;
    }
  }
  stop() {
    this.userIdle.stopTimer();
    this.seconds = 15;
    this.timeStart = false;
  }
  stopWatching() {
    debugger;
    this.userIdle.stopWatching();
  }

  startWatching() {
    debugger;
    this.userIdle.startWatching();
  }

  restart() {
    this.userIdle.resetTimer();
  }
  coordinates(event: MouseEvent): void {
    this.clientX = event.clientX;
    this.clientY = event.clientY;

    console.log(this.clientX, this.clientY);

  }

  // @HostListener('mousemove') onMove() {
  //   this.stop();
  // } 

  // @HostListener('keypress') onKeyPress() {
  //   this.stop();
  // }

  getStatus(){
    return sessionStorage.getItem('loggedIn');
  }
  getTime() {
    return sessionStorage.getItem('timeStart');
  }

  getDes() {
    return sessionStorage.getItem('isDes');
  }
  logout(){
    debugger;
    this.stop();
    this.cookie.deleteAll();
    this.timeStart = false;
    this.auth.logout();
    this.router.navigate(['']);
  }
}
