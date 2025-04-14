import { Component, computed, input } from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //  @Input({required: true}) avatar!: string;
  //  @Input({required:true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  // get imageUrl() {
  //   return `assets/users/${this.avatar}`;
  // }

  imageUrl = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {}
}
