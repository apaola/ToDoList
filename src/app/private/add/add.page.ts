import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';
import { Router } from '@angular/router';
import { ListI } from 'src/app/core/models/listI.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  list: ListI = {
    user_id: '',
    description: ''
  };
  listId = null;

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit() {
  }

  saveList(){
    this.listService.addList(this.list).then(() => {
      this.router.navigate(['/tabs']);
    })
  }

}
