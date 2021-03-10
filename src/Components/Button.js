import PropTypes from 'prop-types'

const Button = ({onClick}) => {
    return (<button onClick={onClick}
         className="btn">ADD</button>)
}

Button.defaultProps = {
    color: 'steelblue',
}
Button.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func
}

export default Button