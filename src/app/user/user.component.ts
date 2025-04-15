import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) id!:string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;
  @Output() selected = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>()

  get imageUrl() {
    return `assets/users/${this.avatar}`;
  }

  // imageUrl = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    this.selected.emit(this.id);
  }
}
