import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Navbar.module.scss';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const showNavbar = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.navContainer}>
            <img className={styles.logo} src="/vinchylogo.png" alt="logo" />
            <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
                <a className={styles.navItem} href="/#home">Home</a>
                <a className={styles.navItem} href="/#about">About</a>
                <a className={styles.navItem} href="/#contact">Contact</a>
                {isMobile && (
                    <button className={styles.navBtn} onClick={showNavbar}>
                        <CloseIcon />
                    </button>
                )}
            </nav>
            {isMobile && (
                <button className={styles.menuBtn} onClick={showNavbar}>
                    <MenuIcon />
                </button>
            )}
        </div>
    );
}

export default Navbar;

