import React from 'react'

function Theme({data}) {
    
//816px
    return (

        <table
            className='table'
            id='table-content'
            style={{
                borderCollapse: 'collapse', 
                verticalAlign: '-webkit-baseline-middle',
                fontSize: '1vw',
                fontFamily: 'Verdana',
                width: '100vw',
                maxWidth: '800px',
                height: 'auto',
                maxHeight: '230px',
                margin: '2rem 0',
                paddingLeft: '4em',
                whiteSpace: 'nowrap',
                display: 'flex',
                backgroundImage: "url('https://raw.githubusercontent.com/anakatech-kaykostadinov/mailsig/gh-pages/static/media/nm.f7d08900.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
            }}
        >
            <tr
            style={{
            }}
            >

                <div style={{paddingLeft: '1em', width: '70%', zIndex: '3', position: 'absolute',}}>
                    <p style={{
                            color: '#262626',
                            fontSize: '1.5em',
                            fontWeight: '600',
                            margin: '0',
                            marginTop: '.5em'
                        }}
                    >
                        {data.name}
                    </p>

                    <p style={{
                            color: 'teal',
                            fontWeight: '600',
                            margin: '0'
                        }}
                    >
                        {data.title}
                    </p>

                    <p style={{
                            color: 'white',
                            marginBottom: '.3em',
                            marginTop: '5vh',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        
                        {data.phone &&
                        <React.Fragment >
                            <img
                            style={{
                                height: '1.2em',
                                width: '1.2em',
                                marginRight: '.5em',
                            }} 
                            src="https://raw.githubusercontent.com/anakatech-kaykostadinov/mailsig/main/src/images/phone.png" alt=""/>
                            {data.phone}
                        </React.Fragment>
                        }
                    </p>

                    <p style={{
                            color: 'white',
                            margin: '0',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        {data.fax &&
                        <React.Fragment>
                            <img
                            style={{
                                height: '1.2em',
                                width: '1.2em',
                                marginRight: '.5em',
                            }} 
                            src="https://raw.githubusercontent.com/anakatech-kaykostadinov/mailsig/main/src/images/phone.png" alt=""/>
                            {data.fax}
                        </React.Fragment>
                        }
                    </p>
                    
                    <div style={{
                        marginTop: '3vh'
                    }}>
                        <a style={{
                                color: 'lightblue',
                                fontWeight: '600',
                                textDecoration: 'none',
                                margin: '0',
                            }}
                            href={data.website}
                        >
                            {data.website}
                        </a>
                    </div>

                    <p style={{
                        color: 'white',
                        margin: '0',
                    }}
                    >{data.address}</p>

                </div>
            </tr>



            {/* social media */}
            <tr style={{
                color: 'white',
                display: 'flex',
                alignItems: 'flex-end',
                zIndex: '3'
            }}
            >
                <td style={{
                    width: '45vw'
                }}></td>
                <td>
                    { // social media buttons
                        Object.entries(data.social).map( (media, key) => {
                            // show only if field is populated
                            if (media[1].link !== '') {
                                return (
                                    <a 
                                    key={key}
                                    href={media[1].link}
                                    style={{
                                        margin: '0 .25em'
                                    }}
                                    >
                                        <img
                                        style={{
                                            width: '2em',
                                            height: '2em'
                                        }}
                                        src={media[1].icon}
                                        alt="social media"/>
                                    </a>
                                );
                            }
                        })
                    }
                </td>
            </tr>
        </table>

    )
}

export default Theme


{/* <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="padding: 0px; vertical-align: middle;"><h3 color="#000000" class="sc-fBuWsC eeihxG" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);"><span>asd</span><span>&nbsp;</span><span>asd</span></h3><p color="#000000" font-size="medium" class="sc-fMiknA bxZCMx" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>asd</span></p><p color="#000000" font-size="medium" class="sc-dVhcbM fghLuF" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>asd</span><span>&nbsp;|&nbsp;</span><span>asd</span></p><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;"><tbody><tr><td height="30"></td></tr><tr><td color="#F2547D" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ" style="width: 100%; border-bottom: 1px solid rgb(242, 84, 125); border-left: none; display: block;"></td></tr><tr><td height="30"></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span color="#F2547D" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px; color: rgb(0, 0, 0);"><a href="tel:456456" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>456456</span></a> | <a href="tel:456456456" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>456456456</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span color="#F2547D" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="mailto:asdasdasdas@asda.asd" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>asdasdasdas@asda.asd</span></a></td></tr><tr height="25" style="vertical-align: middle;"><td width="30" style="vertical-align: middle;"><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td style="vertical-align: bottom;"><span color="#F2547D" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(242, 84, 125);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#F2547D" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(242, 84, 125);"></span></td></tr></tbody></table></td><td style="padding: 0px;"><a href="//asdasdas.com" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>asdasdas.com</span></a></td></tr></tbody></table><table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;"><tbody><tr><td height="30"></td></tr></tbody></table><a href="https://www.hubspot.com/email-signature-generator?utm_source=create-signature" target="_blank" rel="noopener noreferrer" class="sc-gisBJw kDlVKO" style="font-size: 12px; display: block; color: rgb(0, 0, 0);">Create Your Own Free Signature</a></td></tr></tbody></table></td></tr></tbody></table> */}