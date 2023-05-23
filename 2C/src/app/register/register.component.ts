import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: any = {};

  constructor(private userService: UserService) { }

  registerUser() {
    this.userService.registerUser(this.user);
  }

  onInputChange() {
    console.log('Input value changed:', this.user);
  }
}
