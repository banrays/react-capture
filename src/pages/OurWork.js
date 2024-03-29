import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
    return(
        <Work initial="hidden" animate="show" variants={pageAnimation} exit="exit">
            <Movie>
                <h2>The Athelete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete" >
                <img src={athlete} alt="athelete"/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                <img src={theracer} alt="theracer"/>
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`
const Movie = styled.div`
padding-bottom: 10rem;
.line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
}
img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
}
h2{
    color: white;
}
`

export default OurWork;