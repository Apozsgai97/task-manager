import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input ({ required: true }) userId!: string;
  @Output() closeTask = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  //enteredTitle = signal('');

  onClose() {
    this.closeTask.emit();
  }

  onSubmitTask() {
    this.taskService.addTask(this.userId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    });
    this.closeTask.emit();
  }
}
