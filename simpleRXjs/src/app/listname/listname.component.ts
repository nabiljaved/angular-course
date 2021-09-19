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
  newItem!: String;
  itemIndex!: number;

  constructor(private lstsrv : ListServiceService) {
        this.nameSubscription = new Subscription
   }

  ngOnInit(): void {
      this.list = this.lstsrv.names
      this.nameSubscription =  this.lstsrv.nameChanged.subscribe(name => {
          this.list = name
      })
  }

  remove(data:String){
    this.lstsrv.removeName(data)
  }

  update(data:String, index:number){
      this.newItem = data
      this.itemIndex = index
  }

  saveChanges(data:String){
      this.lstsrv.updateName(data, this.itemIndex)
  }

  ngOnDestroy(): void {
      this.nameSubscription.unsubscribe()
  }




}
