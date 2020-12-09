import React from 'react'


function Editor(props) {
    const { data, setData } = props

    return (
        <section className='ms-main__editor'>
            <h4>Your details:</h4>
            <div className="rows">
                <div className='row_one'>
                    <label htmlFor="name">Name</label>
                    <input name='name' placeholder='name' value={data.name} onChange={e => setData({ ...data, name: e.target.value })}></input>
                    <label htmlFor="title">Job Title</label>
                    <input name='title' placeholder='job title' value={data.title} onChange={e => setData({ ...data, title: e.target.value })}></input>
                    <label htmlFor="phone">Phone</label>
                    <input name='phone' placeholder='phone' value={data.phone} onChange={e => setData({ ...data, phone: e.target.value })}></input>
                    <label htmlFor="fax">Fax</label>
                    <input name='fax' placeholder='fax' value={data.fax} onChange={e => setData({ ...data, fax: e.target.value })}></input>
                    <label htmlFor="website">Website</label>
                    <input name='website' placeholder='website' value={data.website} onChange={e => setData({ ...data, website: e.target.value })}></input>
                </div>
                <div className="row_two">
                    <label htmlFor="address">Address</label>
                    <input name='address' placeholder='address' value={data.address} onChange={e => setData({ ...data, address: e.target.value })}></input>
                    <label htmlFor="facebook">Facebook</label>
                    <input name='facebook' placeholder='facebook' value={data.social.fb.link} onChange={e => setData({ ...data, social: { ...data.social, fb: { ...data.social.fb, link: e.target.value } } })}></input>
                    <label htmlFor="instagram">Instagram</label>
                    <input name='instagram' placeholder='instagram' value={data.social.ig.link} onChange={e => setData({ ...data, social: { ...data.social, ig: { ...data.social.ig, link: e.target.value } } })}></input>
                    <label htmlFor="linkedin">LinkedIn</label>
                    <input name='linkedin' placeholder='linkedin' value={data.social.linkedin.link} onChange={e => setData({ ...data, social: { ...data.social, linkedin: { ...data.social.linkedin, link: e.target.value } } })}></input>
                    <label htmlFor="twitter">Twitter</label>
                    <input name='twitter' placeholder='twitter' value={data.social.twitter.link} onChange={e => setData({ ...data, social: { ...data.social, twitter: { ...data.social.twitter, link: e.target.value } } })}></input>
                </div>
            </div>
        </section>
    )
}

export default Editor
