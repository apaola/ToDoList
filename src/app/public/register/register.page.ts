import { User } from './../../core/models/user.class';
import { Router } from '@angular/router';
import { AuthService } from './../../core/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['/']);
  }
 
  async onRegister() {
    const user = await this.authService.onRegister(this.user.email, this.user.password, this.user.name);
    if(user) {
      this.navigate();
    }
  }

}
