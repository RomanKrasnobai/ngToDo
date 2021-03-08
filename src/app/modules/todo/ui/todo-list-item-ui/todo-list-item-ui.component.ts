import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.css']
})
export class TodoListItemUiComponent implements OnInit {
  @Input() todo: Todo;
  @Output() edit = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.edit.emit();
  }

  onToggle(event): void {
    event.preventDefault();
    this.toggle.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
