import React from 'react'

function Theme(props) {
    const [name] = props

    return (
        <div className={`${name}-container`}>
            <div>
                <h3 className={`${name}-container__name`}></h3>
                <p className={`${name}-container__title`}></p>
            </div>
            <div>
                <p className={`${name}-container__phone`}></p>
                <p className={`${name}-container__fax`}></p>
            </div>
            <div>
                <a href='#' className={`${name}-container__website`}></a>
                <p className={`${name}-container__address`}></p>
            </div>
            <div>
                <a href="#" className={`${name}-container__social`}><i className='fab fa-facebook'></i></a>
                <a href="#" className={`${name}-container__social`}><i className='fab fa-facebook'></i></a>
            </div>
        </div>
    )
}

export default Theme
