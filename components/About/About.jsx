import styles from './About.module.scss';


function About() {

    return (
        <div className={styles.aboutSection}> 
        <div className={styles.aboutContainerOne}>
        </div>
        <div className={styles.aboutContainerTwo}>
        <h1 className={styles.heading}>
        better keep an eye out...its limited</h1>
        <p  className={styles.paragraph}>new and exclusive drops ever month</p>
        </div>
        </div>
    );
}

export default About;