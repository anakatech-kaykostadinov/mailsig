import React, { useState, useEffect } from 'react'
import image1 from '../images/templates/np.jpg';
import image2 from '../images/templates/nm.jpg';
import $ from 'jquery';

function ThemePicker(props) {
    const { selected, setSelected } = props;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        if (open) {
            $('.ms-main__theme-picker').slideDown()
        } else {
            $('.ms-main__theme-picker').slideUp()
        }
    }, [open]);

    return (
        <>
            <div className="ms-main__theme-picker">
                <img src={image1} alt="" name='np' onClick={e => {
                    setSelected(e.target.name);  
                }} />
                <img src={image2} alt="" name='nm' onClick={e => {
                    setSelected(e.target.name)
                }} />

            </div>
            <button className="showSlide" onClick={() => setOpen(!open)}>
                {open ? 'Close' : 'Show Templates'}
            </button>

        </>
    )
}

export default ThemePicker
