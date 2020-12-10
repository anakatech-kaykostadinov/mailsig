import React from 'react'
import bg from '../images/nm-2.png'

function Theme({ data }) {
    return (
        <table
            className='table'
            id='table-content'
            cellPadding="0"
            cellSpacing="0"
            style={{
                verticalAlign: '-webkit-baseline-middle',
                fontSize: '16px',
                fontFamily: 'Verdana',
                padding: '1rem 5rem',
                paddingBottom: '0',
                width: '816px',
                maxWidth: '100vw',
                height: '234px',
                maxHeight: '234px',
                margin: '2rem 0',
                whiteSpace: 'nowrap',
                backgroundImage: "url('https://lh3.googleusercontent.com/z5CTpQ96HuhKu7TVYOE9amM1zRv1AmPYbck1vKoBc9K2J5zkSerCjXXsJ4DeWmPa_X3odT8YDf3qiY1gFU2XAeff54F6rnpJrXD5_02r0ondkmypIUUhsd7TCpjO7h9FTYMAf8aGHeomcG7PSCKC4a_0oW7Be4Q4Z14SGPjMjuhKFw-CUuhfuQ116J5I8IldPA9dn1IlUC7bq1x8U9vnq5_t1ItiKRK4lxHkLIsjm_Om92izB3VgyxKSg0cNILb2dEITPPEIAKtPwJYgUgWXqzFEE5GhMxd5_2QgK6bb3aadtpUUIozfap6BusNrAOmoemYnko5F5PslKfE-nYS56IarSC3A7goU4n7ld1xO9GCXVGNvHnUf7Md1YJn_r4DHgzdqZjM5aXHeV7Zaa39XbPLdx-6CwNiAuXW5ZvxocWffhF_XS9YhTD8BSwyfGskk41ZThfYWJwNz0GW9YKy8ni75JIOS0oLgf48zkrSOdM_EcuMMKTZagpQ0JkyJYPaci_5Qk3JqDkkPLRhnklo6JvGNbI_7SvOlhhPo1YJqaN3ggIYqylIdB2VY3iDY3GxzyR5r_YbcrGfWfGPZaQFDnauHWwsBbjOexnLAEzA0IS5sOSzm7zRkEYJoZo2GrWaVp6tckTxuJemftULEghnHIV5HLFcG5O080p9tWeiNvf4B_GH5UhJxQ420bVY=w816-h243-no?authuser=0')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}
        >
            <tbody>
                <tr style={{
                    color: '#262626',
                    fontSize: '24px',
                    fontWeight: '600',
                    height: '1rem',
                    whiteSpace: 'nowrap'
                }}
                >
                    <td>{data.name}</td>
                </tr>
                <tr style={{ height: '1rem' }}>
                    <td style={{
                        color: 'orange',
                        fontWeight: '600',
                        whiteSpace: 'nowrap'

                    }}
                    >{data.title}</td>
                </tr>

                <tr style={{
                    color: '#262626',
                    height: '4rem',
                    verticalAlign: 'bottom',
                    whiteSpace: 'nowrap'
                }}
                >
                    <td style={{
                        width: '150px'
                    }}
                    >
                        {data.phone &&
                            <React.Fragment >
                                <svg style={{
                                    width: '1rem',
                                    height: '1rem',
                                }} 
                                aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-facebook fa-w-16 fa-2x"><path fill="orange" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" class=""></path></svg>

                                {data.phone}
                            </React.Fragment>
                        }
                    </td>
                    <td style={{
                        color: '#262626',
                        height: '2.5rem',
                        verticalAlign: 'bottom',
                        paddingBottom: '3px',
                        paddingLeft: '.5rem',
                    }}
                    >
                        <a
                            style={{
                                color: '#262626',
                                fontWeight: '600',
                                textDecoration: 'none',
                            }}
                            href={data.website}
                        >{data.website}</a>
                    </td>
                </tr>

                <tr style={{
                    color: '#262626',
                    height: '1.5rem',
                    verticalAlign: 'top'
                }}
                >
                    <td>
                        {data.fax &&
                            <React.Fragment>
                                <i
                                    class="fas fa-phone-alt"
                                    style={{
                                        backgroundColor: 'orange',
                                        borderRadius: '50%',
                                        fontSize: '.7rem',
                                        padding: '.3rem',
                                        color: '#262626',
                                        marginRight: '.5rem'
                                    }}
                                ></i>
                                {data.fax}
                            </React.Fragment>
                        }
                    </td>
                    <td style={{ paddingBottom: '4px', paddingLeft: '.5rem' }}>
                        {data.address}
                    </td>
                </tr>
            </tbody>
            <div>
                <div style={{
                    color: '#262626',
                    display: 'flex',
                    position: 'relative',
                    left: '150px',
                    bottom: '-7px',
                    marginTop: '2rem',
                    marginBottom: '1.4rem'
                }}
                >

                    { // social media buttons
                        Object.entries(data.social).map((media, key) => {
                            // show only if field is populated
                            if (media[1].link !== '') {
                                return (
                                    <div key={key}
                                        style={{
                                            padding: '0 .25rem',
                                        }}
                                    >
                                        <a href={media[1].link}>
                                            <img style={{
                                                filter: 'invert(90%)'
                                            }} 
                                            src="https://lh3.googleusercontent.com/IFd-qKxtXY_UXEedBeMJUeIseVmliikGwYE6So35Op1R9SPPmJL9ob7y9IB1h3UrU4XQSq5MRgWciqSsquAJiUs6CyT6JvVbVfAHmC6MceGtEHOTTa1en8O5UbWAc1L2Mria54vaqxpUg5UbPId21iy64hn27ZZw6-6TcDkJGEBBGaz-q3Cy1Je97j4g6Dmk9S279QMNn9eo_w5mUh8OOTmQt-BbTswRxBHh34EtOZA8cmTvYxU78Ckfav8hRkMCHOSLS9CUpdazFO7Nh_alxrQev_-Iv5EmZ15l5ElHuIRAavYR86naxRs7xWckgWy72Rnla9lFdC8pA0FjZSUy5cY_3s_CWmjXQCaZFL9F-qL08c12Tfy7bap9p7Hu8qWas2RL-Vl51jfM9EFXbwn_-ZVAAp7cqTDjNd9xWrXMOGB-6klNeJmKLXAVwr5yYDrRC5yNArL614efcnhDDtY5PqmY5PCbz3sE0bAXCfS61tnoydE7OzzE7eBbq3kWfNwuJrcjqigve7rvoOiLFEhjme61RzEHlJ1my-t3CZyfcbz8YX-eebGL_zvG1sGTri_bVGiwOWFgxnbQnO9sDi45SGpKZAaS6xqXI_ARf4qhpTlC4QoibakxlW_Uu2vw76d99-oLLC155eVrCKV0uX8os1vP8BABA-k4MEejtZ9fB6RbGIfJqu4jm1LfNss=s32-no?authuser=0" alt=""/>
                                        </a>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        </table>
    )
}

export default Theme


