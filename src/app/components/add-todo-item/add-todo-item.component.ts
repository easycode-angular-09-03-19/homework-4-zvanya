import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../interfaces/ITodo'
import { generateId } from '../../helpers/uuid'

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {
  
  @Output() onAddTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  
  todoName = '';
  todoDescription = '';
  
  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.onAddTodo.emit({
      id: generateId(),
      name: this.todoName,
      description: this.todoDescription,
      completed: false
    });
    
    this.todoName = '';
    this.todoDescription = '';
  }
  
}
