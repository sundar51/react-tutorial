import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
    message: PropTypes.string.isRequired
}

function Message(props){
    return(
        <span>
            {props.message}
        </span>
    )
}

Message.propTypes = propTypes;
export default Message;
