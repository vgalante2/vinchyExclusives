import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from './Navbar.module.scss';
import Link from 'next/link'
import Cart from "./Cart/Cart.jsx";

function Navbar({ cartOpen, toggleCart }) {
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
   
    const router = useRouter();

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

  const homePage = (e) => {
    e.preventDefault()
    router.push('/');
  }
  


    return (
        <div className={styles.navContainer}>
            <img className={styles.logo} onClick={homePage}  src="/vinchylogo.png" alt="logo" />
            <nav className={`${styles.nav} ${menuOpen ? styles.show : ''}`}>
                <Link className={styles.navItem} href="/">Home</Link>
                <a className={styles.navItem} href="/#about">About</a>
                <a className={styles.navItem} href="/#catalog">Catalog</a>
                <a className={styles.navItem} href="/#contact">Contact</a>
                <a  onClick={toggleCart} className={`${styles.navItem} ${styles.cart}`}>Cart</a>
                
                 {isMobile && (
                    <button className={styles.closeBtn} onClick={showNavbar}>
                        <CloseIcon />
                    </button>
                )}
            </nav>
            {isMobile && (
                <div className={styles.MobileBtn}>
                <button className={styles.CartBtn} onClick={toggleCart}>
                    <ShoppingCartIcon />
                    </button>
                <button className={styles.menuBtn} onClick={showNavbar}>
                    <MenuIcon />
                </button>
                </div>
            )}
        </div>
    );
}

export default Navbar;

