import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'customdirective';
  name = "";

  constructor(private user:UserDataService)
  {
    let data = this.user.getData()
    this.name = data.name

    //console.warn(this.user.getData())

  }



}
