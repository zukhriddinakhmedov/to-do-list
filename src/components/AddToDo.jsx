import { useState } from "react";

const AddToDo = ({ onAdd }) => {
    const [title, setTitle] = useState('')
    const [completed, setCompleted] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            alert('please add a title for your to do list ')
            return
        }

        onAdd({ title, completed })

        setTitle('')
        setCompleted(false)
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Title</label>
                <input type='text' placeholder='Add a Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}></input>
            </div>
            <div className="form-control
            form-control-check">
                <label>Is it completed?</label>
                <input type='checkbox' placeholder='Please tick if completed'
                    checked={completed}
                    onChange={(e) => setCompleted(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save the to do list'
                className='btn btn-block'></input>
        </form>
    )
}

export default AddToDo