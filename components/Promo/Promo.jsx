import React, { useState } from 'react';
import styles from './Promo.module.scss'

function Promo() {
const [itsClicked, setItsClicked] = useState(false);


const btnClicked =  () => {

  setItsClicked(true);

}

return (
    <section className={styles.promoSection}>
    
     <div className={styles.promoContent}>
     
     <button   className={ `${styles.promoOne} ${styles.box}`}>

     </button>
     <button onClick={btnClicked} className={ `${styles.promoTwo} ${styles.box}`}>
        
        </button>
        <button onClick={btnClicked} className={ `${styles.promoThree} ${styles.box}`}>
        
        </button>
        <button onClick={btnClicked}  className={ `${styles.promoFour} ${styles.box}`}>
        
        </button>
        

     </div>
    </section>
)


}


export default Promo;