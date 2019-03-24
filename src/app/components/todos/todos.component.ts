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
    // Удаление через forEach медленнее чем for на ~90%
    // https://jsperf.com/arr-slice-zv
    
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === id) {
        this.todos.splice(i, 1);
        return;
      }
    }
    
    
  }
  
  completeAllTodos() {
    this.todos.forEach((todo) => {
      todo.completed = true;
    });
  }
  
}
