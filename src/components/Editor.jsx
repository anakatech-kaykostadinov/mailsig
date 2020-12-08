import React, { useState } from 'react'


function Editor() {
    const [data, setData] = useState({
        name: '',
        title: '',
    })

    console.log(data);

    return (
        <div className='ms-main__editor'>
            <input name='name' placeholder='name' value={data.name} onChange={e => setData({ ...data, name: e.target.value })}></input>
            <input name='title' placeholder='title' value={data.title} onChange={e => setData({ ...data, title: e.target.value })}></input>
        </div>
    )
}

export default Editor
