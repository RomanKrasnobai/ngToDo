import {Action} from '@ngrx/store';
import {TodoState} from './todo.reducer';

export enum todoActionsType {
  create = '[TODO] Create todo item',
  toggle = '[TODO] Toggle todo item',
  delete = '[TODO] Delete todo item',
  edit = '[TODO] Edit todo item',
  load = '[TODO], Load todo state',
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;
  constructor(public payload: { name: string }) {
  }
}

export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;
  constructor(public payload: { id: number }) {
  }
}

export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;
  constructor(public payload: { id: number, name: string }) {
  }
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;
  constructor(public payload: { id: number }) {
  }
}

export class TodoLoadStateAction implements Action {
  readonly type = todoActionsType.load;
  constructor(public payload: { state: TodoState }) {
  }
}

export type TodoActions = TodoCreateAction |
  TodoToggleAction |
  TodoEditAction |
  TodoDeleteAction |
  TodoLoadStateAction;
