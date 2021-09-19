import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';

interface dataType{
  id : number,
  body: String,
  title: String,
  userId:number
}


@Injectable({
  providedIn: 'root'
})

export class JsonplaceholderService {

  postChanged = new Subject<dataType[]>();

  constructor(private http:HttpClient) { }

  getPosts(){
    let url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get(url)
  }

}
