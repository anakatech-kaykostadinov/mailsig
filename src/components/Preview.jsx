import React from 'react'
import Theme from './Theme'

function Preview(props) {

    return (
        <div>
            <Theme name={props.selected} />
        </div>
    )
}

export default Preview
