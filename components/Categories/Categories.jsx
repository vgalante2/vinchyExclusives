import React, { useState } from 'react';
import styles from './Categories.module.scss'
import { useRouter } from 'next/router';


function Categories() {

const router = useRouter();



const navigatePage = (path) => {
  router.push(path);
}

return (
    <section className={styles.promoSection}>
   <h1 className={styles.Heading}>Categories</h1>
     <div className={styles.promoContent}>
     
    <button onClick={() => navigatePage('/hoodies')}  className={ `${styles.promoOne} ${styles.box}`}>Hoodies 
    
    </button>
     
     <button onClick={() => navigatePage('/shirts')} className={ `${styles.promoTwo} ${styles.box}`}>Shirts
        
        </button>
        <button onClick={() => navigatePage('/pants')} className={ `${styles.promoThree} ${styles.box}`}>Pants
        
        </button>
        <button onClick={() => navigatePage('/sets')}  className={ `${styles.promoFour} ${styles.box}`}>Sets
        
        </button>
        

     </div>
    </section>
)


}


export default Categories;