import React from 'react'
import bg from '../images/nm.png'

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
                padding: '1rem 5rem',
                width: '816px',
                height: '234px',
                margin: '2rem 0'
            }}
        >
            <tbody>
                <tr style={{
                        color: '#262626',
                        fontSize: '24px',
                        fontWeight: '600',
                        height: '1rem'
                    }}
                >
                    <td>{data.name}</td>
                </tr>
                <tr style={{height: '1rem'}}>
                    <td style={{
                            color: 'teal',
                            fontWeight: '600',

                        }}
                    >{data.title}</td>
                </tr>

                <tr style={{
                        color: 'white',
                        height: '3.5rem',
                        verticalAlign: 'bottom'
                    }}
                >
                    <td>
                        {data.phone &&
                        <React.Fragment >
                            <i
                                className="fas fa-phone-alt"
                                style={{
                                    backgroundColor: 'lightblue',
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
                </tr>

                <tr style={{
                        color: 'white',
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
                                    backgroundColor: 'lightblue',
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
                </tr>

                <tr style={{
                        color: 'white',
                        height: '2.5rem',
                        verticalAlign: 'bottom'
                    }}
                >
                    <td>
                        <a
                            style={{
                                color: 'lightblue',
                                fontWeight: '600',
                                textDecoration: 'none'
                            }}
                            href={data.website}
                        >{data.website}</a>
                    </td>
                </tr>

                <tr style={{
                    color: 'white',
                }}
                >
                    <td>
                        {data.address} 
                    </td>
                    { // social media buttons
                        Object.entries(data.social).map( (media, key) => {
                            // show only if field is populated
                            if (media[1].link !== '') {
                                return (
                                    <td key={key}
                                        style={{
                                            textAlign: 'right',
                                            width: '1rem',
                                            padding: '0 .25rem'
                                    }}
                                    >
                                        <a href={media[1].link}>
                                            <i 
                                                className={media[1].icon}
                                                style={{
                                                    color: 'lightblue',
                                                    fontSize: '2rem'
                                                }}
                                            ></i>
                                        </a>
                                    </td> 
                                );
                            }
                        })
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default Theme


