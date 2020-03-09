import { ListService } from './../../core/services/list.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { List } from 'src/app/core/models/list.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  lists: List[];

  constructor(private listService: ListService, private authService: AuthService) {
  }

  uid = this.authService.isLogged.uid;

  ngOnInit() {
    this.listService.getLists().subscribe(res => {
      this.lists = res;
    })
  }

}
