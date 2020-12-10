import React, { useState, useEffect } from 'react'
import image1 from '../images/templates/np.jpg';
import image2 from '../images/templates/nm.jpg';
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ThemePicker(props) {
    const { setSelected } = props;
    const [open, setOpen] = useState(false);
    const responsiveOptions = {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 4,
            }
    }
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
                <OwlCarousel
                    className="owl-theme"
                    dots={false}
                    nav
                    items={4}
                    responsive={responsiveOptions}
                >
                    <img src={image1} alt="" name='np' onClick={e => {
                        setSelected(e.target.name);
                    }} />
                    <img src={image2} alt="" name='nm' onClick={e => {
                        setSelected(e.target.name)
                    }} />
                    <img src={image1} alt="" name='np' onClick={e => {
                        setSelected(e.target.name);
                    }} />
                    <img src={image2} alt="" name='nm' onClick={e => {
                        setSelected(e.target.name)
                    }} />
                    <img src={image1} alt="" name='np' onClick={e => {
                        setSelected(e.target.name);
                    }} />
                    <img src={image2} alt="" name='nm' onClick={e => {
                        setSelected(e.target.name)
                    }} />
                </OwlCarousel>
            </div>
            <div className="showSlide-wrap">
                <button className="showSlide" onClick={() => setOpen(!open)}>
                    {open ? 'Close' : 'Show Templates'}
                </button>
            </div>

        </>
    )
}

export default ThemePicker
