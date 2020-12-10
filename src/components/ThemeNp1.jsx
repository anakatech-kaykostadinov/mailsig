import React from 'react'
import bg from '../images/nm.png'

function Theme({data}) {
    
//816px
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
                width: '816px',
                maxWidth: '100%',
                height: '234px',
                margin: '2rem 0',
                whiteSpace: 'nowrap',
                backgroundImage: "url('https://lh3.googleusercontent.com/pQ9Df9YiNOgZCRA3UBSjb1-yxYc32K4PJ9TxVOsypWKmRDGAD0tUdRcM5P5JPnEq0sAXfJzr1Nc6QVI7ITFd72Bd-DWmuIBDUxcBEdA6J03HhSp83UMVqVakBebyNWPiQDv2SW2vbh810bs15eVZVXJX1-IrPZTWm-vm6gF2sfS03kP5lCDbZSdwz3VHTSmZI00BVtWfgBtdDFdtBPy6FXOco2qloKSM1zOo3BLO2ywm1TtiIHSeHQQHTF1diIcHBEVmNcvqbC43SIvsAEorN9lPNjLS7jRXLAkRw-zguuzA9Dxqedn5CzRMCbuQuoOtcA_m54VNhex6NKEucZqYdCmORdSWOxM_KcRO9SNVFBlJDYf6QB83TWLxqrFwv7DjfhetIcwX5TbBmwx3lwoGktHV5nMRKKNIEyrfmTSzwTjhrI2IDRHzAhOAPiA_p5k7xptPB9sbH3kMoORUoYE7ZASg3s1ugrdQPptnyIUFvPKLK42tztFBrs7PXeVNm6A2eG4mKQVUDaG4vFweN5l-TFgxT7jT5v-c3_LXCQu4tyg7Lw4hPGOiv94BZ9fl11EgYnWWFIGRAk4M2odZZnNEziUTIDtnTOprhQrap8o7wmn5HDIomtuSwOKzSKvxE_1RbbofSHa0svSmYdVN-NOeqL0vCSiYQGTL5BAoXWLcI_RFiWW8_nACqfXwxHU=w816-h234-no?authuser=0')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
            }}
            id="table-content"
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


