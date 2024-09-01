import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  

  constructor(private httpService: HttpClient) { }

  getData(): Observable<any> {
    return this.httpService.get("https://dummyjson.com/products")
  }
}
