import React from 'react'
import nm from '../images/templates/base/nm.png'
import np from '../images/templates/base/np.png'

function Theme(props) {
    const { name } = props;
    return (
        <div className={`${name}-container`} >
            <h3 className={`${name}-container__name`} ></h3>
            <p className={`${name}-container__title`}></p>
            <p className={`${name}-container__phone`}></p>
            <p className={`${name}-container__fax`}></p>
            <a href='/' className={`${name}-container__website`}></a>
            <p className={`${name}-container__address`}></p>
            <a href="/" className={`${name}-container__social`}><i className='fab fa-facebook'></i></a>
            <a href="/" className={`${name}-container__social`}><i className='fab fa-facebook'></i></a>
        </div>
    )
}

export default Theme;