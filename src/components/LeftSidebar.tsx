import React from "react";
import styles from "./LeftSidebar.module.css";
import LogoIcon from '../assets/logo.png';

const LeftSidebar = () => {
    const Reload = () => {
        window.open('/', '_self');
    }
    return (
        <header className={styles.LeftSideBar}>
            <img className={styles.headerImage} src={LogoIcon} alt='backstage-logo' onClick={Reload}/>
            <section className={styles.LeftSideBarBottom}>
                <div className={styles.Top}>
                    <h4 className={styles.TopText}>
                        Backstage Talks is a magazine of casual, but in depth dialogues on design and
                        business. Our decisions shape and influence this complex world—to have a chance
                        to make the right ones, we need to talk.
                    </h4>
                    <p className={styles.CopyrightText}>
                        © 2023 Published by <a href='http://milk.sk/' target='_blank' rel="noreferrer">Studio Milk</a>
                    </p>
                </div>
                <a href='/privacy-policy' className={styles.PrivacyButton}>Privacy Policy</a>
            </section>
        </header>
    );
}

export default LeftSidebar;