import React from 'react'
import Theme from './Theme'

function ThemePicker() {
    const themeDesigns = [
        'nm',
        'np'
    ]

    return (
        <div>
            {themeDesigns.forEach(themeName => {
                <Theme name={themeName} />
            })}
        </div>
    )
}

export default ThemePicker
