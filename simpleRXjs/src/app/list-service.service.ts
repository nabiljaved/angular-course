import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  nameChanged = new Subject<String[]>()
  names:String[] = ["nabeel", "max", "tony", "jennifer"]

  constructor() { }

  getNames(){
     return this.names;
  }

  addName(item:String){
    this.names.push(item)
    this.nameChanged.next(this.names)
  }

  removeName(item:String){
    this.names = this.names.filter(name => item != name)
    this.nameChanged.next(this.names)
  }

}
