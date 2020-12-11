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
                height: '234px',
                margin: '2rem 0',
                whiteSpace: 'nowrap',
                backgroundImage: "url('https://lh3.googleusercontent.com/fife/ABSRlIpLZKEd4EEFM4V7tPKeJXMMTb3FGvafWj-OgDz4Grbw7viiWhu1fNB03r9RTpbhPhALDEE8q47oqHE1IJDIm0i-jp30e9GEgZmvgx92GRvNPi-jINv4cjFxG0I8WoQpW6iZsVVi3Vvz62kylYldUY0amd25mvjg60T0PRQlCZ-104pvlwFfSr1oAFpsg6WEzbWoG7GkVzCMHu57_AIedcqHRgGKhx80AQhdR9Llwfnio3L7X1W-K9exWTicmuOXvpfsWZ4GQm1iwOMm3ul6xcpbetxW1paFra5s8Er-HmIrXewohtrU24zbkHy1Y-CD5R6iVCCVJ8BWwX3EawaVHOfAWRxPXATsYwBdOdNZyq-K_pkJ_i0Dp1att5etH499tjmxFShd2O-o7adSpJ-qJCRd87H8lZhmpreS_LSmA-joQwm81_aYQvb4w1QRnAm5uGGg_2T5GeGMzRyid9yUooao22n3eJzwEyNjXOLoefhkL_tLoEiLLY-P8Se9A2wyASzVnB6xfY4_-Xo0vqwuL_BYenzgpWczk-3DTKXn-KwUnDe987XPtppGVJtv5PC7JizbYXZaUL5upMdlLPJZIj0Izbevb1nRhwT3U34cuKpes1ngU1a0Ld_MOMw4dABfjDs-MvLRoVaQpiXRY5lkzEFK9uF4Sg04xxNK2C5DXy8Iiv3IymknZPoTT5IiOFchsLtca0sLV3X3vX7adlejrkmZ-wVqc9gzYbQ=s816-w816-h234-no?authuser=0')",
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
                            <img
                            style={{
                                height: '1.2rem',
                                width: '1.2rem',
                                marginRight: '.5rem',
                                marginBottom: '-4px'
                            }} 
                            src="https://lh3.googleusercontent.com/0NV5R8VTgHu0xOGmfUkTrLqL9dq0bGcS1iUa7p3_Et_RRLvfLxKqH1FIjAnvRjf0u-ZQ7m_bFQKaVE7HuWC8A2vMNwjFn0Z2szUqdR7Zlvi_FINy6r0I2E8gSYt80X3GjJ0-CUyxcKwag8AukCUs_7EgSpCl2KO-DNP2MI0kvfUeOltCrBu6wmWqtrbB9SH0h9MlxhXdoIiBu5f-2eKacAmcY2BGrDVJ74s7jZnK4sxzT0CQMSIgQehD1F-baeAYw_LXtPe7QcoboguPNQCxIx6zdMOPsZqMi4PwWLdrKxuRU2Mtp03ry_md1-VBy-aQgdphHa1J0xrcLj9PbicwfVPMpzGnOxzvfuwt8i1eAS60EQlstHp-L7SWOuWEll5OiRwPJ5Sh8cH8pLYZg3LWYB72-HjxDK3lMfddaOVWenMhtezonFf2GFzClZMq4U4jpHeBZdpI3RaCPSYGMLHpDMj6Iu3hNOLkDM7wZrvAVccOmj7LwsxitFq39n-61-4Sv52j0nshygIpa8HO8qJDx-bG37FOrpFRMVMXxv-8fIskDRxr4LwzFYs4O0ypRrPs2uaqm0ql5mf8UutwiKNG4NVFgjMe0LUNXgrYJFWA_28UVLQ6UP0JV1DURvLfpj9s51ACAdrogr60Z9LgXulMQT_pynp8qvE6AiuJO77gXHQPGHAmHSpJqpZiT0w=w19-h20-no?authuser=0" alt=""/>
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
                            <img
                            style={{
                                height: '1.2rem',
                                width: '1.2rem',
                                marginRight: '.5rem',
                                marginBottom: '-4px'
                            }} 
                            src="https://lh3.googleusercontent.com/0NV5R8VTgHu0xOGmfUkTrLqL9dq0bGcS1iUa7p3_Et_RRLvfLxKqH1FIjAnvRjf0u-ZQ7m_bFQKaVE7HuWC8A2vMNwjFn0Z2szUqdR7Zlvi_FINy6r0I2E8gSYt80X3GjJ0-CUyxcKwag8AukCUs_7EgSpCl2KO-DNP2MI0kvfUeOltCrBu6wmWqtrbB9SH0h9MlxhXdoIiBu5f-2eKacAmcY2BGrDVJ74s7jZnK4sxzT0CQMSIgQehD1F-baeAYw_LXtPe7QcoboguPNQCxIx6zdMOPsZqMi4PwWLdrKxuRU2Mtp03ry_md1-VBy-aQgdphHa1J0xrcLj9PbicwfVPMpzGnOxzvfuwt8i1eAS60EQlstHp-L7SWOuWEll5OiRwPJ5Sh8cH8pLYZg3LWYB72-HjxDK3lMfddaOVWenMhtezonFf2GFzClZMq4U4jpHeBZdpI3RaCPSYGMLHpDMj6Iu3hNOLkDM7wZrvAVccOmj7LwsxitFq39n-61-4Sv52j0nshygIpa8HO8qJDx-bG37FOrpFRMVMXxv-8fIskDRxr4LwzFYs4O0ypRrPs2uaqm0ql5mf8UutwiKNG4NVFgjMe0LUNXgrYJFWA_28UVLQ6UP0JV1DURvLfpj9s51ACAdrogr60Z9LgXulMQT_pynp8qvE6AiuJO77gXHQPGHAmHSpJqpZiT0w=w19-h20-no?authuser=0" alt=""/>
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
                                        <img
                                        style={{
                                            width: '2rem',
                                            height: '2rem'
                                        }}
                                        src={media[1].icon}
                                        alt="social media"/>
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


