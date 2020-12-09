import React from 'react'


function Editor(props) {
    const { data, setData } = props

    return (
        <section className='ms-main__editor'>
            <h4>Your details:</h4>
            <input name='name' placeholder='name' value={data.name} onChange={e => setData({ ...data, name: e.target.value })}></input>
            <input name='title' placeholder='job title' value={data.title} onChange={e => setData({ ...data, title: e.target.value })}></input>
            <input name='phone' placeholder='phone' value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })}></input>
            <input name='fax' placeholder='fax' value={data.fax} onChange={e => setData({ ...data, fax: e.target.value })}></input>
            <input name='website' placeholder='website' value={data.website} onChange={e => setData({ ...data, website: e.target.value })}></input>
            <input name='address' placeholder='address' value={data.address} onChange={e => setData({ ...data, address: e.target.value })}></input>
            <input name='facebook' placeholder='facebook' value={data.social.fb.link} onChange={e => setData({ ...data, social: { ...data.social, fb: { ...data.social.fb, link: e.target.value } } })}></input>
            <input name='instagram' placeholder='instagram' value={data.social.ig.link} onChange={e => setData({ ...data, social: { ...data.social, ig: { ...data.social.ig, link: e.target.value } } })}></input>
            <input name='linkedin' placeholder='linkedin' value={data.social.linkedin.link} onChange={e => setData({ ...data, social: { ...data.social, linkedin: { ...data.social.linkedin, link: e.target.value } } })}></input>
        </section>
    )
}

export default Editor
