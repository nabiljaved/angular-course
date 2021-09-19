import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';

@Component({
  selector: 'app-entername',
  templateUrl: './entername.component.html',
  styleUrls: ['./entername.component.css']
})
export class EnternameComponent implements OnInit {

  constructor(private lstsrv:ListServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.lstsrv.addName(data.item)

  }


}
