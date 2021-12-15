
import './App.css';
import Form from './components/Form';
import Header from './components/Header'
import ListTasks from './components/ListTasks';
import {useState} from 'react'


function App(title) {
  const [tasks, setTasks] = useState(
    [
          {id:1,
          name: "task 1",
          description: "is a task, ttask 1",
          isCompleted: false
      },
          {id:2,
          name: "task 2",
          description: "is a task, ttask 2",
          isCompleted: false
      },
      {  id:3,
          name: "task 3",
          description: "is a task, ttask 2",
          isCompleted: false
      }
    ]
  )
  
  const [show, setShow] = useState(false)
    
  
  //delete task
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task) => task.id !== id))
    console.log(tasks)
  }

  //add task
  const addTask = (task)=>{
    console.log(task)
    setTasks([...tasks,{id:tasks.length+1,...task}])
    
  }
  
  // update task
  const updateTask= (ntask)=>{
    console.log(`task ${ntask.name} complete? => ${ntask.isCompleted}`)
    const id = ntask.id
    let oTasks = tasks.filter((task) => task.id !== id)
    const nTask = {  id:id,
      name: ntask.name,
      description: ntask.description,
      isCompleted: !ntask.isCompleted
    }
    oTasks = [nTask, ...oTasks]
    console.log(oTasks)
    setTasks(oTasks)

  }

  const toggleShow= ()=>{
    console.log(show)
    setShow(!show)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-version">
          <p>ToDo List V1.0</p>
        </div>
      </header>
      <div className="App-container">
        <div className="container">
          <div className="title-bar">
            <Header 
              title = {"Mike's Task Tracker"}
              totalCompleted = {tasks.filter((task)=> task.isCompleted===true).length}
            
            />
          </div>
          <div className="add-btn">
            <></>
            <div id='sh' className="btn" onClick={toggleShow}>+</div>
          </div>
          <div className="form-form" style={{height: show === true? "20%" : "0%"}}>
            <Form onAdd={addTask} show={show}/>
          </div>
       
          <div className="tasks-container">
            <ListTasks tasks={tasks} onShow={toggleShow} show={show} onDelete={deleteTask} onUpdate={updateTask} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
