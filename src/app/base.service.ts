import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor( private http:HttpClient) { }

  getJsonFile(url: string){
    return this.http.get<any[]>(url);
  }
}
