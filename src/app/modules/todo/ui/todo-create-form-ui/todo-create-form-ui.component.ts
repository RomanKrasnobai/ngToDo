import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.css']
})
export class TodoCreateFormUiComponent implements OnInit {
  todoForm: FormGroup;

  @Output() create = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initTodoForm();
  }

  getControl(controlName: string): AbstractControl {
    return this.todoForm.get(controlName);
  }

  onCreate(): void {
    if (this.getControl('name').value) {
      this.create.emit(this.getControl('name').value);
      this.getControl('name').setValue('');
    }
  }

  private initTodoForm(): void {
    this.todoForm = this.fb.group({
      name: '',
    });
  }

}
