import React from 'react';
import home1 from '../img/home1.png';
import {StyledAbout, StyledDescription, StyledImage, StyledHide} from '../styles';
//Framer motion
import {motion} from 'framer-motion';

const AboutSection = () => {

    

    return(
        <StyledAbout>
            <StyledDescription>
                <motion.div className="title">
                    <StyledHide>
                        <motion.h2  >We work to make</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 >your <span>dreams</span></motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 >come true</motion.h2>
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