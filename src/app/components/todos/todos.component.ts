import { Component, OnInit } from '@angular/core';
import { ITodo } from '../../interfaces/ITodo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[] = [];
  
  constructor() { }

  ngOnInit() {
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }
  
  deleteTodo(id: string) {
    this.todos.forEach((todo, index, arr) => {
      if (todo.id === id) arr.splice(index, 1);
    });
  }
  
  completeAllTodos() {
    this.todos.forEach((todo) => {
      todo.completed = true;
    });
  }
  
}
