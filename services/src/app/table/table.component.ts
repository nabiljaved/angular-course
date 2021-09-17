import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../jsonplaceholder.service';
import { dataType } from '../model/postinterface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data:any = []
  constructor(private dummy:JsonplaceholderService) {

    this.dummy.getPosts().subscribe(posts => {
      this.data = posts
      this.data = this.data.slice(0,10)
      //console.warn(posts)
    })

  }

  ngOnInit(): void {
  }



}
