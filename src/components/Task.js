import React from 'react'
import { useState } from 'react'



function Task({task, onDelete, onUpdate}) {
    const vh = window.outerWidth
    const [showDetails, setShowDetails] = useState(false)
    const toggleDetails= ()=>{
        console.log(showDetails)
        setShowDetails(!showDetails)
      }
    const setDetails = <p className='task-description' style={{margin:"0px"}}>{task.description}</p>
    
    return (
        <div className='task'>
            <div className="task-container">
                <div className="task-body"onClick={()=>{onUpdate(task)}}>
                    <div
                    className='task-complete'
                    style={task.isCompleted === true? {backgroundColor:'greenyellow'} : {backgroundColor:'red'} }></div> 
                    
                    <div className="task-content">
                        <h4 className='task-name' style={{margin:"0px"}}>{task.name}</h4>
                        {showDetails === true ? setDetails : null}
                    </div>
                </div>
                <div className="show-details" onClick={toggleDetails}>{showDetails===false? "more..." : "hide"}</div>

            </div>
            <div className="btn-btn">
                <div className="btn" onClick={()=>{onDelete(task.id)}}>X</div> 

            </div>
        </div>
        
    )
}

export default Task
