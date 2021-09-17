import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'secondproject';
  
  name="nabeel javed"
  name2 = "NABEEL JAVED"
  today = Date.now()
  str = "karachi airport teminal 1" 
  val=10 

  student = {
    name:"Dr strange", 
    id: 8
  }

  receive = {
    id : '',
    name : ''
  }

  studentArray = 
  [
     {
       name:"Dr strange", 
       id: 8
     },
     {
       name:"Nabeel Javed", 
       id: 8
     },
     {
       name:"Ami", 
       id: 8
     }
  ]

  fromParent = ""

  parentComponent(data:any)
  {
    this.fromParent = data
    console.warn(data)
  }

  btnParent(data:any){
    this.receive.id = data.id
    this.receive.name = data.name      
  }


}
