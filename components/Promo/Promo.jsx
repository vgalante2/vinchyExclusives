import React from 'react';
import styles from "./Promo.module.scss";

function Promo() {

    return (
        <section className={styles.PromoSection}>
        <div className={styles.PromoContainer}>
        <div className={styles.PromoDivOne} >
        <div className={styles.Overlay}></div>
        <h1 className={styles.Text1}></h1>
       </div>
       <div className={styles.PromoDivTwo}>
    <div className={styles.OverlayText}>
        <h1 className={styles.Text2}>Lets Create.</h1>
    </div>
    <div className={styles.Overlay2}></div>
    <video className={styles.promo2} src="/promo2.mp4" alt="" autoPlay loop muted />
</div>
       <div className={styles.PromoDivThree}>
       <div className={styles.Overlay}></div>
       <h1 className={styles.Text3}></h1>
       </div>
        </div>
        </section>
    )
}

export default Promo;