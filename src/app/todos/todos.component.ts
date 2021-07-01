import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private service: TodoService) { }


  faTimes = faTimes;
  todoList:string[] = [] ;
  inputTask:string = "" ;

  ngOnInit(): void {
    this.todoList = this.service.toDo ;
    console.log(this.todoList);
  }

  additemsc(){
    this.service.additems(this.inputTask) ;
    this.inputTask = "";
  }

}
