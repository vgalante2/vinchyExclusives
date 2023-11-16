import React, { useEffect } from 'react';
import styles from './Promo.module.scss';


function Promo() {
    return (
        
        <div className={styles.videoTextContainer}>
            <video 
                className={styles.video} 
                autoPlay 
                loop 
                muted 
                playsInline
                src="/vid.mp4" // Replace with your video URL
            >
            </video>
           <div className={styles.textBox}>
            <h1 className={styles.text}>exclusives by cenzo*</h1> 
            </div>
        </div>
        
    );
};

export default Promo;

    
