import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;

  isDesign: boolean;

  constructor() { this.visible = false; this.isDesign = false;}

  show() {
    this.visible = true;
  }

  designated() {
    this.isDesign = true;
    sessionStorage.setItem('isDes', 'true');
  }

  toggle() {this.visible = !this.visible;}

  hide() {this.visible = false;}
  
  regular() {
    this.isDesign = false;
    sessionStorage.setItem('isDes', 'false')
  }
}
