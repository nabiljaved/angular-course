import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title:String = 'firstproject';
  name = "nabeeel javed"
  getName(){
    return 'Ahmed Raza Khan'
  }
  getVariableName(){
    return this.name
  }
  obj ={
    'name':'peter',
    'age':'34'
  }
  array = ["max", "jill", "jennifer"]

  a = 100
  b = 200

  siteUrl = window.location.href
}
