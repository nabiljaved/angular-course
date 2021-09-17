import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sendparent',
  templateUrl: './sendparent.component.html',
  styleUrls: ['./sendparent.component.css']
})
export class SendparentComponent implements OnInit {

@Output() sendParent:EventEmitter<any> = new EventEmitter()
@Output() btnParent:EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    this.sendParent.emit("hello")
  }

  emitToParent(){
    this.btnParent.emit({name:'jeffry', id:3})
  }

}
