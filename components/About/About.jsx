import styles from './About.module.scss';


function About() {

    return (
        <div className={styles.aboutSection}> 
        <div className={styles.aboutContainerOne}>
         <h1 className={styles.heading}>Section 1</h1>
        </div>
        <div className={styles.aboutContainerTwo}>
        <h1 className={styles.headingTwo}>Section 2</h1>
        </div>
        </div>
    );
}

export default About;