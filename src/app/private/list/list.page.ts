import { ListService } from './../../core/services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  lists: any;

  constructor(private listService: ListService) {
   }

  ngOnInit() {
    this.listService.getLists().subscribe(res => {
      this.lists = res;
    });
  }

}
