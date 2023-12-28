import React, { useState } from 'react';
import styles from './Categories.module.scss'
import { useRouter } from 'next/router';


function Categories() {

const router = useRouter();



const navigatePage = (path) => {
  router.push(path);
}

return (
    <section className={styles.CategorySection}>
   <h1 className={styles.CategoryHeading}>Categories</h1>
     <div className={styles.CategoryContent}>
     
    <button onClick={() => navigatePage('/hoodies')}  className={ `${styles.CategoryOne} ${styles.box}`}>Hoodies 
    
    </button>
     
     <button onClick={() => navigatePage('/shirts')} className={ `${styles.CategoryTwo} ${styles.box}`}>Shirts
        
        </button>
        <button onClick={() => navigatePage('/pants')} className={ `${styles.CategoryThree} ${styles.box}`}>Pants
        
        </button>
        <button onClick={() => navigatePage('/sets')}  className={ `${styles.CategoryFour} ${styles.box}`}>Sets
        
        </button>
        

     </div>
    </section>
)


}


export default Categories;