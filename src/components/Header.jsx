import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ titles, showAdd, onAdd }) => {
    return (
        <header className="header">
            <h1>{titles}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                title={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}
            />

        </header>
    )
}
Header.defaultProps = {
    titles: 'To do list',
}
Header.propTypes = {
    titles: PropTypes.string
}
export default Header