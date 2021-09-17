import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  getData(){
    return {
      name:'nabeel',
      age:36,
      id:10
    }
  }

}
