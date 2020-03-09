import { User } from './../../core/models/user.class';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/tabs']);
  }

  async onLogin() {
    const user = await this.authService.onLogin(this.user);
    if(user) {
      this.navigate();
    }
  }

}
