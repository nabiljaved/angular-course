import { Component, OnInit } from '@angular/core';


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }, {
    type: 'primary',
    message: 'This is a primary alert',
  }, {
    type: 'secondary',
    message: 'This is a secondary alert',
  }, {
    type: 'light',
    message: 'This is a light alert',
  }, {
    type: 'dark',
    message: 'This is a dark alert',
  }
];




@Component({
  selector: 'app-callfunction',
  templateUrl: './callfunction.component.html',
  styleUrls: ['./callfunction.component.css']
})
export class CallfunctionComponent implements OnInit {

  tony = 'my name is tony'
  dynamicValue:String = ""
  name = "bruce"
  name2 = "nabeel"
  disabledBox = true
  show = false
  show2 = 'yes'
  fruit = 'apple'
  color = 'red'
  dynamicColor = 'orange'
  data = ['nabeel', 'anil', 'max', 'azeem', 'akbar']
  error = false
  alerts: Alert[] = [];

  student = 
  [
    {
      id : 1,
      name : 'nabeel'
    },
    {
      id : 2,
      name : 'asad'
    },
    {
      id : 3,
      name : 'azeem'
    },
    {
      id : 4,
      name : 'rafique'
    }
  ]

  getName(){
    alert('Nabeel')
  }

  dynamicName(name:any){
    alert(name)
  }

  getVariableName(name:any){
    alert(name)
  }

  myEvent(event:any){
    alert(event)
  }

  myEvent2(event:any){
    console.log(event)
  }

  getValue(vals:any){
    console.log(vals.target.value)
    this.dynamicValue = vals.target.value
  }

  getValueFromBox(val2:any){
    alert(val2)
  }

  getValueFromBox4(val3:any){
     console.log(val3)
     this.name = "" 
  }

  getValueFromBox5(val4:any){
    console.log(val4)
     this.name2 = ""
  }

  enableBox(){
    this.disabledBox = !this.disabledBox
  }

  getFormValue(val5:any){
    console.log(val5)
  }

  updateColor(){
    console.log('clicked')
    this.dynamicColor = 'green'
  }

  ngOnInit(): void {
  }

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
