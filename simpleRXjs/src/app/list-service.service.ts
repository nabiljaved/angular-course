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

  updateName(item:String, index:number){
      // for(let i=0; i<this.names.length; i++){
      //     if(this.names[i] == this.names[index]){
      //         this.names[i] = item
      //     }
      // }
      this.names.forEach((el, i, array) => {
            if(i == index ){
                array[i] = item
            }
      } )
      this.nameChanged.next(this.names)
  }

}


//array update example
// let myArray = [
//   {id: 0, name: "Jhon"},
//   {id: 1, name: "Sara"},
//   {id: 2, name: "Domnic"},
//   {id: 3, name: "Bravo"}
// ],

// //Find index of specific object using findIndex method.
// objIndex = myArray.findIndex((obj => obj.id == 1));

// //Log object to Console.
// console.log("Before update: ", myArray[objIndex])

// //Update object's name property.
// myArray[objIndex].name = "Laila"

// //Log object to console again.
// console.log("After update: ", myArray[objIndex])
