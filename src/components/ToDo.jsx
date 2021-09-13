import { FaTimes } from 'react-icons/fa'


const ToDo = ({ todo, onDelete }) => {
    return (
        <div className='todo'>
            <h3>{todo.title}{' '}
                <p>{` ${todo.completed ? 'Completed' : 'Not completed'}`} </p>
                <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                    onClick={async () => await onDelete(todo.id)} />
            </h3>
        </div>
    )
}
export default ToDo