import React from 'react'
import Task from './Task'
// import { useState } from 'react'




const ListTasks = ({tasks, onDelete, onUpdate, show, onShow}) => {
    return(
        tasks.map((task,idx)=>(
            <Task key={idx} onDelete={onDelete} task={task} onShow={onShow} show={show} onUpdate={onUpdate}/>
        ))
    )
}

ListTasks.defaultProps = {tasks: "No tasks to show"}

export default ListTasks
