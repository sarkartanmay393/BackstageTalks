import React from 'react';
import styles from './App.module.css';

const LogoIcon = require('./assets/logo.png');
function App() {
  return (
      <>
          <header className={styles.header}>
              <img className={styles.headerImage} src={LogoIcon} alt='backstage-logo'/>
              <h4>info@backstagetalks.com</h4>
          </header>
          <main className={styles.main}>
              <section className={styles.MainMagazineOverview}>
                  <img className={styles.MagazineCover} src={require('./assets/cover_issue_6.png')} alt='backstage_cover_issue_6' />
                  <h3>Issue #6</h3>
                  <button className={styles.MagazineButton}>Buy Here</button>
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
                      <p className={styles.CopyrightText}>© 2023 Published by Studio Milk</p>
                  </div>
                      <a href='/privacyPolicy' className={styles.PrivacyButton}>Privacy Policy</a>
              </section>
              <section className={styles.FooterRight}>
                  <p>Issue #6</p>
                  <p>Issue #5</p>
                  <p>Issue #4</p>
                  <p>Issue #3</p>
                  <p>Issue #2</p>
                  <p>Issue #1</p>
              </section>
          </footer>
      </>
  );
}

export default App;
