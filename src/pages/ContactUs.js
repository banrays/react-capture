import React from 'react';

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const ContactUs = () => {
    return(
        <motion.div initial="hidden" animate="show" variants={pageAnimation} exit="exit" style={{background: "#fff"}}>
            <h1>Contact Us</h1>
        </motion.div>
    )
}

export default ContactUs;