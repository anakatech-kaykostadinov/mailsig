import React from 'react'

function ThemePicker(props) {
    const {selected, setSelected} = props

    return (
        <div>
            <img src="" alt="" name='np' onClick={e => setSelected(e.target.name)}/>
        </div>
    )
}

export default ThemePicker
