import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  apiUrl = 'http://ec2-18-229-117-87.sa-east-1.compute.amazonaws.com:8081/allsurebetgames';
  
  constructor(private httpClient : HttpClient) { }

  findAll(){
    return this.httpClient.get(this.apiUrl);

  }
}
