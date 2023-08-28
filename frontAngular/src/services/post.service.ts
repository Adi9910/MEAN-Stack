import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://jsonplaceholder.typicode.com/posts';
     
  constructor(private http: HttpClient) {}
   
  getPosts(){
    return this.http.get(this.url);
  }
  private apiUrl = 'http://localhost:3000/data'; // Replace with your API URL

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
   
}
