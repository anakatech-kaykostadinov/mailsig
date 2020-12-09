import React from 'react'
import bg from '../images/nm-2.png'

function Theme({data}) {

    return (
        <table
            background={bg}
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

