import React from 'react'
import Theme from './Theme'

function Preview(props) {

    return (
        <section className="ms-main__preview">
            <Theme name={props.selected} />
        </section>
    )
}

export default Preview
