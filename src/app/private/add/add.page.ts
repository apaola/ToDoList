import { ListService } from './../../core/services/list.service';
import { List } from 'src/app/core/models/list.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: List = {
    uid: '',
    description: ''
  };

  listId = null;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit() {
  }

  saveList(){
    this.listService.addToList(this.list);
    this.router.navigate(['/tabs']);
  }

}
