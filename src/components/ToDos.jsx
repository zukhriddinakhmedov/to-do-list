import PropTypes from 'prop-types'

const ToDos = ({ title, todos }) => {
    return (
        <div>
            <h1>{title}</h1>
            {
                todos.map((todo, id) => (
                    <ToDo
                        key={id}
                        todo={todo}
                    />
                ))
            }
        </div>
    )
}
ToDos.defaultProps = {
    title: 'To do list',
}
ToDos.propTypes = {
    title: PropTypes.string
}

export default ToDos