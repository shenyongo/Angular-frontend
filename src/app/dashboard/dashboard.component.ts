import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { NavbarService } from '../navbar.service';
import { FetchUserService } from '../fetch-user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GridOptions } from 'ag-grid-community';

import { CellEditorComponent } from '../cell-editor/cell-editor.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Url :string;  
  token : string;  
  header : any;  
  size: number;
  private employ : any;
  private location: Location;
  gridOptions: GridOptions = {};
  
  columnDefs = [
    {headerName: 'UserId', field: 'UserId'},
    {headerName: 'User', field: 'User', editable: true},
    {headerName: 'LoginName', field: 'LoginName', editable: true},
    {headerName: 'password', field: 'password', editable: true},
    {headerName: 'Email', field: 'Email', editable: true},
    {headerName: 'IsApproved', field: 'IsApproved', editable: true, cellEditor: 'cellEditorComponent'},
    {headerName: 'Status', field: 'Status', editable: true},
    {headerName: 'Approved', field:'Approved'}
  ];

  private rowData = [];

  frameworkComponents = {
    cellEditorComponent: CellEditorComponent,
  };

  constructor(private nav: NavbarService, private fetch: FetchUserService, private httpService: HttpClient) {
    this.Url = 'http://localhost:50335/api/Login/';
    this.size = 0;
   }

  ngOnInit() {
    if(this.showStatus())
    {
      this.fetch.getData().subscribe(
           data => {
             this.employ = data;
             console.log("employ " + this.employ);
           });
    }
  }

  onGridReady(params) {
    this.gridOptions.api = params.api;
  }

  
  createNewRowData(emp : any) {
    var approval = "No"
    if(emp.IsApproved == 1 && emp.Status == 3)
    {
      approval = "Yes"
    }
    var newData = {
        UserId: emp.UserId,
        User: emp.UserName,
        LoginName: emp.LoginName,
        password: emp.Password,
        Email: emp.Email,
        IsApproved: emp.IsApproved,
        Status: emp.Status,
        Approved: approval
    };
    return newData;
}
  addRow(emp: any)
  {
    if(this.size < Object.keys(this.employ).length)
    {
      var row = this.createNewRowData(emp);
      this.rowData.push(row);
      this.gridOptions.api.setRowData(this.rowData);
      console.log(this.rowData);
      this.size++;
      //debugger;
    }
  }
  Save(){
    //console.log(this.rowData);
    // var entry = this.rowData[0];
    // this.fetch.updateData(entry).subscribe();
    for(var row = 0; row < this.rowData.length; row++){
      var entry = this.rowData[row];
      //console.log(entry);
      this.fetch.updateData(entry).subscribe();
    }
    window.location.reload();
  }

  showStatus()
  {
    return sessionStorage.getItem('isDes');
  }
  

}
