import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeout',
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.css']
})
export class TimeoutComponent implements OnInit {

  @Input() countMinutes: number;
  @Input() countSeconds: number;

  constructor() { }

  ngOnInit() {
  }

}
