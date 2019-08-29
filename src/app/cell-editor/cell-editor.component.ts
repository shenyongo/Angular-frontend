import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cell-editor',
  template: `
    <input #i [value]="params.value"/>
  `
})
export class CellEditorComponent implements AfterViewInit {
@ViewChild('i', {static: false}) textInput;
parems;

ngAfterViewInit(){
  debugger;
  setTimeout(() => {
    this.textInput.nativeElement.focus();
  });
}

agInit(parems: any): void {
  debugger;
  this.parems.value = parems.value;
}

getValue() {
  debugger;
  return this.textInput.nativeElement.value;
}

}
