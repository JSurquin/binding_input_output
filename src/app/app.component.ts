import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users: any[] = [];

  userChange(newUser: any) {
    this.users.push(newUser);
  }
}
