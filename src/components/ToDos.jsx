import ToDo from './ToDo'

const ToDos = ({ todos, onDelete }) => {
    return (
        <>
            {
                todos.map((todo, index) => (
                    <ToDo
                        key={index}
                        todo={todo}
                        onDelete={onDelete}
                    />
                ))
            }
        </>
    )
}


export default ToDos