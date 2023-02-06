import React from "react";
import styles from "./FooterLeftArea.module.css";

const FooterLeftArea = () => {
    return (
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
    );
}

export default FooterLeftArea;