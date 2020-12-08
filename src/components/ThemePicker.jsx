import React from 'react'
import Theme from './Theme'

function ThemePicker() {
    const themeDesigns = [
        'nm',
    ]

    return (
        <div>
            {themeDesigns.foreach( theme => {
                <Theme name={theme} />
            })}
        </div>
    )
}

export default ThemePicker
