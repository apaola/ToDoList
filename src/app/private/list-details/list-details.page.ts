import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/services/list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { List } from 'src/app/core/models/list.interface';


@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.page.html',
  styleUrls: ['./list-details.page.scss'],
})
export class ListDetailsPage implements OnInit {

  listId = null;

  constructor(private listService: ListService, private router: Router, private authService: AuthService,
    private route: ActivatedRoute) { }

    list: List = {
      uid: this.authService.isLogged.uid,
      description: ''
    };

  ngOnInit() {
    this.listId = this.route.snapshot.params["id"];
    console.log(this.listId);
    if(this.listId) {
      this.loadList();
    }
  }

  async loadList() {
    this.listService.getList(this.listId).subscribe(res => {
      this.list = res;
    });
  }

  async saveChanges() {
    this.listService.updateList(this.list, this.listId).then(() => {
      this.router.navigate(['/tabs']);
    })
  }

  async deleteList(idList: string) {
    this.listService.removeList(idList);
    this.router.navigate(['/tabs']);
  }

}
