import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  firstName = 'Brandon';
  lastName = 'Dozier';
  page = {
    title: 'Home',
    content: 'this page works',
    image: 'assets/drawing.jpg',
  }
  user: string;

  constructor() { }

  ngOnInit() {
  }

  getUser() {
    return sessionStorage.getItem('UserName');
  }

}
