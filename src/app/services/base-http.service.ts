import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  private headers = new HttpHeaders({ 
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
    'Content-Type': 'application/json',
    'Accept': 'application/json' ,
    'Authorization': `Bearer ${localStorage.getItem('token')}`
    //'x-access-token':localStorage.getItem('token')
  });
      private authHeaderAdded: boolean = false
      constructor(private http: HttpClient) { }
      GetHeaders(): HttpHeaders{        
        //this.headers.set('x-access-token', localStorage.getItem('token') );
        return this.headers;
      }
     
    Post(url: string, model: any) { 
      this.GetHeaders();
      return this.http.post(url, model, { headers: this.headers }).toPromise();
    }
    Put(url: string, model: any) {
      this.GetHeaders();
      return this.http.put(url, model, { headers: this.headers }).toPromise();
    }
    Get(url: string) {
      this.GetHeaders();
      return this.http.get(url, { headers: this.headers }).toPromise();
    }
    Delete(url: string) {
      this.GetHeaders();
        return this.http.delete(url, { headers: this.headers }).toPromise();
    }
}
