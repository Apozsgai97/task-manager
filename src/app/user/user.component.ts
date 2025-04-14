import { Component, computed, signal } from '@angular/core';
import {USERS} from '../users';

const randomIndex = Math.floor(Math.random() * USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(USERS[randomIndex]);
  imageUrl = computed(() => {
    return `assets/users/${this.selectedUser().avatar}`;
  });

  // get imageUrl() {
  //   return `assets/users/${this.selectedUser.avatar}`;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser.set(USERS[randomIndex]);
  }
}
