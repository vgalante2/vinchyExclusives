import React, { useState } from 'react';
import styles from './Promo.module.scss'
import { useRouter } from 'next/router';


function Promo() {
const [itsClicked, setItsClicked] = useState(false);
const router = useRouter();

const btnClicked =  () => {

  setItsClicked(true);

}

const navigatePage = (path) => {
  router.push(path);
}

return (
    <section className={styles.promoSection}>
    
     <div className={styles.promoContent}>
     
    <button onClick={() => navigatePage('/hoodies')}  className={ `${styles.promoOne} ${styles.box}`}>Hoodies 
    
    </button>
     
     <button onClick={() => navigatePage('/shirts')} className={ `${styles.promoTwo} ${styles.box}`}>Shirts
        
        </button>
        <button onClick={() => navigatePage('/pants')} className={ `${styles.promoThree} ${styles.box}`}>Pants
        
        </button>
        <button onClick={() => navigatePage('/')}  className={ `${styles.promoFour} ${styles.box}`}>Sets
        
        </button>
        

     </div>
    </section>
)


}


export default Promo;