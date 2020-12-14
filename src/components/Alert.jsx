import React, {useState} from 'react'


function Alert({msg, type, reset}) {
    const [dispatch, setDispatch] = useState(false)

    if (msg != ''){
        setDispatch = true
        setInterval(() => {
            setDispatch = false
        }, 4000);
    }

    return ( msg != '' && dispatch &&
        <div className={`alert alert--${type}`}>
            {msg}
        </div>
    )
}

export default Alert
