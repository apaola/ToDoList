import { ListService } from './../../core/services/list.service';
import { ListI } from './../../core/models/listI.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  lists: ListI[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getLists().subscribe(res => {
      this.lists = res;
    });
  }

}
