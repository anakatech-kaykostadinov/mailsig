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
                    fontSize: '18px',
                    fontFamily: 'Verdana',
                    padding: '1rem 5rem',
                    width: '816px',
                    height: '234px',
                    margin: '2rem 0'
                }}
            >
                <tbody>
                    <tr style={{
                            color: 'black',
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
                            }}
                        >{data.title}</td>
                    </tr>

                    <tr style={{
                            color: 'white',
                            height: '3.5rem',
                            verticalAlign: 'bottom'
                        }}
                    >
                        <td>{data.phone}</td>
                    </tr>

                    <tr style={{
                            color: 'white',
                            height: '1.5rem',
                            verticalAlign: 'bottom'
                        }}
                    >
                        <td>
                            <i
                                class="fas fa-phone-alt"
                                style={{
                                    
                                }}
                            ></i>
                            {data.fax}
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
                                    fontWeight: '500',
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
                                        <td style={{
                                            textAlign: 'right',
                                            width: '1rem',
                                            padding: '0 .25rem'
                                        }}
                                        >
                                            <a key={key} href={media[1].link}>
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


