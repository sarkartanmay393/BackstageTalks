import React from 'react';
import styles from './App.module.css';

const LogoIcon = require('./assets/logo.png');
function App() {
    const issue6url = 'https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r';

    const Reload = () => {
        window.open('/', '_self');
    }

    return (
        <>
            <header className={styles.header}>
                <img className={styles.headerImage} src={LogoIcon} alt='backstage-logo' onClick={Reload}/>
                <a href='mailto:info@backstagetalks.com'><h4>info@backstagetalks.com</h4></a>
            </header>
            <main className={styles.main}>
                <section className={styles.MainMagazineOverview}>
                    <img className={styles.MagazineCover} src={require('./assets/cover_issue_6.png')} alt='backstage_cover_issue_6' />
                    <h3>Issue #6</h3>
                    <a className={styles.MagazineBuy} href={issue6url}>Buy Here</a>
                    <h4>or in <a className={styles.selectedStores} href='/stores'>selected stores</a>.</h4>
                </section>
            </main>
            <footer className={styles.footer}>
                <section className={styles.FooterLeft}>
                    <div className={styles.FooterLeftTop}>
                        <h4 className={styles.FooterText}>
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
                <section className={styles.FooterRight}>
                    <a href='/#issue6'>Issue #6</a>
                    <a href='/#issue5'>Issue #5</a>
                    <a href='/#issue4'>Issue #4</a>
                    <a href='/#issue3'>Issue #3</a>
                    <a href='/#issue2'>Issue #2</a>
                    <a href='/#issue1'>Issue #1</a>
                </section>
            </footer>
        </>
    );
}

export default App;
