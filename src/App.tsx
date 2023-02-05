import React from 'react';
import styles from './App.module.css';

const LogoIcon = require('./assets/logo.png');
function App() {
  return (
      <>
          <header className={styles.header}>
              <img className={styles.headerImage} src={LogoIcon} alt='backstage-logo'/>
              <h3>info@backstagetalks.com</h3>
          </header>
          <main className={styles.main}>
              <section className={styles.MainMagazineOverview}>
                  <img className={styles.MagazineCover} src={require('./assets/cover_issue_6.png')} alt='backstage_cover_issue_6' />
                  <h3>Issue #6</h3>
                  <button className={styles.MagazineButton}>Buy Here</button>
                  <h4>or in <a className={styles.selectedStores} href='/stores'>selected stores</a>.</h4>
              </section>
          </main>
          <footer></footer>
      </>
  );
}

export default App;
