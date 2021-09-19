import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listname',
  templateUrl: './listname.component.html',
  styleUrls: ['./listname.component.css']
})
export class ListnameComponent implements OnInit, OnDestroy {

  list:String[] = []
  private nameSubscription: Subscription

  constructor(private lstsrv : ListServiceService) {
        this.nameSubscription = new Subscription
   }

  ngOnInit(): void {
      this.list = this.lstsrv.names
      this.nameSubscription =  this.lstsrv.nameChanged.subscribe(name => {
          this.list = name
      })
  }

  remove(data:any){
    this.lstsrv.removeName(data)
  }

  ngOnDestroy(): void {
      this.nameSubscription.unsubscribe()
  }




}
