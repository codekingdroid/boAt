import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor(private router: Router) { }

  registerUser(user: any) {
    this.user = user;
    this.router.navigate(['/profile']);
  }

  loginUser(user: any) {
    if (this.user && this.user.email === user.email && this.user.password === user.password) {
      console.log('User logged in successfully');
    } else {
      console.log('Invalid credentials');
    }
  }

  getUser() {
    return this.user;
  }
}
