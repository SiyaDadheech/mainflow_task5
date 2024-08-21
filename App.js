
import './App.css';
import {React,useState} from "react";
function App() {
  const [task,setTask] = useState([" Eat breakfast "," take a shower "," wash the car "]);
  const [newTask,setNewTask] = useState(" ");
  function handleInputChange(event){
    setNewTask(event.target.value);

  }
  function addTask(){
    if(newTask.trim() !== " "){
      setTask(t => [...t , newTask]);
      setNewTask(" ");
    }
  }
  function deleteTask(index){
    const updateTask = task.filter((_,i) => i !== index);
    setTask(updateTask);
  }
  function moveTask(index){
    if(index > 0){
      const updateTask = [...task];
      [updateTask[index],updateTask[index-1]] = [updateTask[index-1],updateTask[index]];
      setTask(updateTask);
    }
  }
  return (
    <>
      <div className="h"><h1>TODO LIST</h1></div>
    <div className="tx">
  
<input type="text" placeholder="enter text"  value={newTask} onChange={handleInputChange} />
<button className="add" onClick={addTask}>Add</button>

<ol>
  {task.map((task,index) => <li key={index}>
    <span className="text">{task}</span>
    <button className="delete" onClick={ () => deleteTask(index)}> Delete</button>
    <button className="mv" onClick={() =>moveTask(index)} >Move</button>
    </li>)}
</ol>
</div>
    </>
  );
}

export default App;
