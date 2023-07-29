/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  tasks = new Array(100);
  ind =0;
  Todo(){
   
  }
  add(task){
    this.tasks[this.ind]= task;
    this.ind++;
  }
  remove(ind){
    if(ind<this.ind){
      for( j=i;j<this.ind;j++){
        tasks[i]= tasks[i+1];
      }
      this.ind--;
    }
  }
  get(ind){
    if(ind<this.ind){
      return tasks[ind];
    }
    return "Not a valid index";
  }
  gatAll(){
    let ans=this.tasks[0];
    for(let i =1;i<this.ind;i++){
      ans+= "\n"+this.tasks[i];
    }
    return ans;
  }
  clear(){
    ind =0;
  }
}
todo = new Todo();
todo.add("fetch water");
todo.add("get eggs");
console.log(todo.gatAll());

module.exports = Todo;
