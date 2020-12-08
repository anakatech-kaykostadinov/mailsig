import React, {useState} from 'react'


function Editor() {
    const [data, setData] = useState({
        name: '',
        title: '',
        phone: '',
        fax: '',
        website: '',
        address: '',
        social: {
            fb: '',
            ig: '',
            linkedin: '',
        }
    })

    return (
        <div className='ms-main__editor'>
            <input name='name' placeholder='name' value={data.name} onChange={e => setData({...data, name:e.target.value})}></input>
            <input name='title' placeholder='title' value={data.title} onChange={e => setData({...data, title:e.target.value})}></input>
            <input name='phone' placeholder='phone' value={data.phone} onChange={e => setData({...data, phone:e.target.value})}></input>
            <input name='fax' placeholder='fax' value={data.fax} onChange={e => setData({...data, fax:e.target.value})}></input>
            <input name='website' placeholder='website' value={data.website} onChange={e => setData({...data, website:e.target.value})}></input>
            <input name='address' placeholder='address' value={data.address} onChange={e => setData({...data, address:e.target.value})}></input>
        </div>
    )
}

export default Editor
