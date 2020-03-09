import { ListService } from './../../core/services/list.service';
import { List } from 'src/app/core/models/list.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private listService: ListService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  list: List = {
    uid: this.authService.isLogged.uid,
    description: ''
  };

  saveList(){
    this.listService.addToList(this.list);
    this.router.navigate(['/tabs']);
  }

}
