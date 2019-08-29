import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class FetchUserService {
  Url :string;  
  token : string;  
  header : any;  
  employees: string[];
  
  
  constructor(private http: HttpClient) {
    this.Url = 'http://localhost:50335/api/Login/';

    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);
   }

   getData(){
     //debugger;
     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
     var path =this.Url+'fetchdata';
    return this.http.get(path);
   }

   updateData(row : any){
     var id = row.UserId;
     //console.log(id);
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    var path =this.Url+ 'Update';
    debugger;
    return this.http.put<void>(path, row, httpOptions);
    
   }
}
