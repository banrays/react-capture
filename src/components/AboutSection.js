import React from 'react';
import home1 from '../img/home1.png';
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';
//Framer motion
import {motion} from 'framer-motion';

const AboutSection = () => {

    const titleAnim =  {
        hidden: {opacity: 0},
        show: {opacity:1, transition: {duration: 2}}
    }
    const container = {
        hidden: {x: 100},
        show: {x:0, transition: {duration: 0.75, ease: 'easeOut', staggerChildren: 0.25}}
    }

    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div variants={container} initial="hidden" animate="show" className="title" exit="exit">
                    <StyledHide>
                        <motion.h2  variants={titleAnim}>We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnim}>come true</motion.h2>
                    </StyledHide>
                </motion.div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="Guy"/>
            </StyledImage>
        </StyledAbout>
    )
}

//Styled component

export default AboutSection;