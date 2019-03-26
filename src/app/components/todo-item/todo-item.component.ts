import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { ITodo } from '../../interfaces/ITodo'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit, OnChanges {
 
  @Input() todo: ITodo;
  @Input() todoCompleted: boolean;
  @Output() onDeleteTodo: EventEmitter<string> = new EventEmitter<string>();
  
  completeTag: string;
  completeClass: string;
  
  constructor() { }
  
  ngOnInit() {
    this.onCompleteChange();
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.todo.completed = changes["todoCompleted"].currentValue;
    this.onCompleteChange();
  }
  
  complete() {
    this.todo.completed = !this.todo.completed;
    this.onCompleteChange();
  }
  
  delete() {
    const result = confirm(`Удалить задачу ${this.todo.name}?`);
    if (result) {
      this.onDeleteTodo.emit(this.todo.id);
    }
  }
  
  onCompleteChange() {
    this.completeTag = this.todo.completed ? 'completed' : 'uncompleted';
    this.completeClass = this.todo.completed ? 'success' : 'warning';
  }
}
