import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>()

  get imageUrl() {
    return `assets/users/${this.user.avatar}`;
  }

  // imageUrl = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
