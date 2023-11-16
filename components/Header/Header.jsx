import styles from './Header.module.scss';

function Header() {
    

  

    return (
        
        <div className={styles.section} >
         <div className={styles.textContainer}>
                <h1>Join the <span className={styles.trip}>trip</span></h1>
                <p>welcome to the truTH...enjoy ur stay ;)</p>
                <a className={styles.heroBtn}>SHop our stuff</a>
            </div>
        <div className={styles.banner}> 
        <div className={styles.clouds}>
        <img src="/cloud1.png" style={{ "--i": "1" }} />
        <img src="/cloud2.png" style={{ "--i": "2" }} />
        <img src="/cloud3.png" style={{ "--i": "3" }} />
        <img src="/cloud4.png" style={{ "--i": "4" }} />
        <img src="/cloud5.png" style={{ "--i": "5" }} />
        <img src="/cloud8.png" style={{ "--i": "6" }} />
        <img src="/cloud7.png" style={{ "--i": "7" }} />
        <img src="/cloud6.png" style={{ "--i": "8" }} />
        </div>
        <img className={styles.fog} src="/fog.png" style={{ "--i": "9" }} />
             </div>
           
        </div>
    );
}

export default Header;