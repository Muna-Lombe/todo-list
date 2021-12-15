import React from 'react'
import {useState} from 'react'

const Form = ({onAdd, show}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    const onSubmit=(e)=>{
        e.preventDefault()
        onAdd({name,description,isCompleted})
        setDescription('')
        setName('')
        setIsCompleted(false)
       
    }

    const setForm = <form 
            className='form form-container'
            onSubmit={onSubmit}
            style={{height: show === true? "20%" : "0%"}}>
                <div className="form task-name">
                    <label htmlFor="Task name"> name</label>
                    <input 
                        type="text" 
                        title="Task name"
                        value={name}
                        placeholder='Add your task name'
                        onChange={(e)=>{
                            setName(e.target.value)
                    }}/>
                </div>

                <div className="form task-description">
                    <label htmlFor="Task desc">description</label>
                    <input 
                        type="text" 
                        title="Task desc"
                        value={description}
                        placeholder='Add your task decription'
                        onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    />
                </div>
                {/* <div className="form task-completed">
                    <label htmlFor="Task comp">completed?</label>
                    <input 
                        type="checkbox" 
                        name="Task comp"
                        value={isCompleted}
                        onChange={(e)=>{
                        setDescription(e.target.value)
                    }}
                    />
                </div> */}
                <div className="btn btn-add">
                    <input 
                        type="submit" 
                        value="Add"
                    /> 
                </div>
            </form>
    const showForm = show === true ? setForm : null
    return (
        showForm
    )
}


export default Form
