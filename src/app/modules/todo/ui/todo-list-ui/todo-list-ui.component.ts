import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.css']
})
export class TodoListUiComponent implements OnInit {
  editIds: number[] = [];

  @Input() todoList: Todo[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{ id: number, name: string, }>();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(id: number): void {
    this.toggle.emit(id);
  }

  onEditMode(id: number): void {
    this.editIds = [...this.editIds, id];
  }

  onEdit(name: string, id: number): void {
    this.editIds = this.editIds.filter(todoId => todoId !== id);
    this.edit.emit({ id, name });
  }

  onDelete(id: number): void {
    this.delete.emit(id);
  }

}
