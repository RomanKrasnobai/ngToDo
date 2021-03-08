import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../model/todo';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todo-list-item-edit-ui',
  templateUrl: './todo-list-item-edit-ui.component.html',
  styleUrls: ['./todo-list-item-edit-ui.component.css']
})
export class TodoListItemEditUiComponent implements OnInit {
  editForm: FormGroup;

  @Input() todo: Todo;
  @Output() edit = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initEditForm();
    this.getControl('name').setValue(this.todo.name);
  }

  getControl(controlName: string): AbstractControl {
    return this.editForm.get(controlName);
  }

  onEdit(): void {
    if (this.getControl('name').value) {
      this.edit.emit(this.getControl('name').value);
    }
  }

  onCancel(): void {
    this.getControl('name').setValue(this.todo.name);
  }

  private initEditForm(): void {
    this.editForm = this.fb.group({
      name: '',
    });
  }

}
