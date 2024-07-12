import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  form: FormGroup;
  tasks: { name: string }[];
  completedTasks: { name: string }[];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      item: ['']
    });
    this.tasks = [];
    this.completedTasks = [];
  }

  ngOnInit(): void {
    this.tasks = [
      { name: 'Code' },
      { name: 'Eat' },
      { name: 'Repeat' }
    ];
    this.completedTasks = [
      { name: 'Sleep' }
    ];
  }

  addItem() {
    if (this.form.valid) {
      this.tasks.push({ name: this.form.value.item });
    }
  }

  completeTask(task: { name: string }) {
    this.completedTasks.push(task);
  }

  deleteTask(task: { name: string }) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.completedTasks = this.completedTasks.filter(t => t !== task);
  }
}
