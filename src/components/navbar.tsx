import React from 'react';
import styles from '../styles/navbar.module.css'
import logo from '../assets/logo.svg';


export const Navbar = (): JSX.Element => {
    return(
        <>  
            <div className={styles.nav}>
                <a href='/'>
                    <img
                    src={logo}
                    alt={'event buster logo'}    
                    width={110}
                    height={30}        
                    />
                </a>
                <nav>
                    <ul>
                        <li><a href="Events">Events</a></li>
                        <li><a href="Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>  
        </>
    )
}