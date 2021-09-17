import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() hero:any
  @Input() student:any

  constructor() { }

  ngOnInit(): void {
    console.warn(this.student)
  }

}
