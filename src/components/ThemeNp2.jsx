import React from 'react'
import bg from '../images/nm-2.png'

function Theme({data}) {

    return (
        <table
            className='table'
            id='table-content'
            background='https://lh3.googleusercontent.com/z5CTpQ96HuhKu7TVYOE9amM1zRv1AmPYbck1vKoBc9K2J5zkSerCjXXsJ4DeWmPa_X3odT8YDf3qiY1gFU2XAeff54F6rnpJrXD5_02r0ondkmypIUUhsd7TCpjO7h9FTYMAf8aGHeomcG7PSCKC4a_0oW7Be4Q4Z14SGPjMjuhKFw-CUuhfuQ116J5I8IldPA9dn1IlUC7bq1x8U9vnq5_t1ItiKRK4lxHkLIsjm_Om92izB3VgyxKSg0cNILb2dEITPPEIAKtPwJYgUgWXqzFEE5GhMxd5_2QgK6bb3aadtpUUIozfap6BusNrAOmoemYnko5F5PslKfE-nYS56IarSC3A7goU4n7ld1xO9GCXVGNvHnUf7Md1YJn_r4DHgzdqZjM5aXHeV7Zaa39XbPLdx-6CwNiAuXW5ZvxocWffhF_XS9YhTD8BSwyfGskk41ZThfYWJwNz0GW9YKy8ni75JIOS0oLgf48zkrSOdM_EcuMMKTZagpQ0JkyJYPaci_5Qk3JqDkkPLRhnklo6JvGNbI_7SvOlhhPo1YJqaN3ggIYqylIdB2VY3iDY3GxzyR5r_YbcrGfWfGPZaQFDnauHWwsBbjOexnLAEzA0IS5sOSzm7zRkEYJoZo2GrWaVp6tckTxuJemftULEghnHIV5HLFcG5O080p9tWeiNvf4B_GH5UhJxQ420bVY=w816-h243-no?authuser=0'
            cellPadding="0"
            cellSpacing="0"
            style={{
                verticalAlign: '-webkit-baseline-middle',
                fontSize: '16px',
                fontFamily: 'Verdana',
                padding: '.7rem 4rem',
                paddingBottom: '.7rem',
                width: '816px',
                minWidth: '816px',
                height: '240px',
                minHeight: '240px',
                margin: '2rem 0',
                whiteSpace: 'nowrap' 
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
                <tr style={{height: '1rem'}}>
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
                            <i
                                className="fas fa-phone-alt"
                                style={{
                                    backgroundColor: 'orange',
                                    borderRadius: '50%',
                                    fontSize: '.7rem',
                                    padding: '.3rem',
                                    color: '#262626',
                                    marginRight: '.5rem'
                                }}
                            ></i>
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
                        verticalAlign: 'bottom'
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
                    <td style={{paddingBottom: '4px', paddingLeft: '.5rem'}}>
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
                    bottom: '0',
                    marginTop: '2.8rem',
                }}
                >

                    { // social media buttons
                        Object.entries(data.social).map( (media, key) => {
                            // show only if field is populated
                            if (media[1].link !== '') {
                                return (
                                    <div key={key}
                                        style={{
                                            padding: '0 .25rem',
                                    }}
                                    >
                                        <a href={media[1].link}>
                                            <i 
                                                className={media[1].icon}
                                                style={{
                                                    color: '#F2F2F2',
                                                    fontSize: '2.3rem',
                                                }}
                                            ></i>
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


