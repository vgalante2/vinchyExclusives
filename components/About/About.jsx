import styles from './About.module.scss';


function About() {

    return (
        <div className={styles.aboutSection}> 
        <img className={styles.heartOne} src="/heart1.png" alt="star" />
        <div className={styles.aboutContainerTwo}>
        <h1 className={styles.heading}>
        better keep an eye out...its limited</h1>
        <p  className={styles.paragraph}>new and exclusive drops ever month</p>
        </div>
        <img className={styles.heartTwo} src="/heart2.png" alt="star2" />
        </div>
    );
}

export default About;