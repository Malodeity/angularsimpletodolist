import { Component } from '@angular/core';
import {Todo} from "./todo";

@Component({
  selector: 'app-root', //for injecting a code to a certain html file
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project CC';


  todoValue:string;
  list: Todo[];




  ngOnInit(){

   this.list = [];
   this.todoValue = "";
  
    }

    AddItem(){

      if(this.todoValue !== ""){
        const newItem : Todo = {
          id: Date.now(),
          value: this.todoValue,
          isDone: false
        };

          this.list.push(newItem);
      }

      this.todoValue = "";
    }
    
    deleteItem(id:number){

       this.list = this.list.filter(item => item.id !== id);

    }


}
