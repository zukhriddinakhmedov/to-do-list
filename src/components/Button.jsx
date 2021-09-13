import PropTypes from 'prop-types'

const Button = ({ color, title, onClick }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className="btn">
            {title}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,

}

export default Button