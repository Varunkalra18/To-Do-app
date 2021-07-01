import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  toDo = [
    "Get Grocery", "Get eggs", "Get vegetables"
  ];
  constructor() { }

  additems(task:string){
    if(task == ""){
      alert("Please add something");
      return ;
    }
    this.toDo.unshift(task) ;
  }
}
