import React from "react";
import styles from "./MagazineBody.module.css";

const MagazineBody = () => {
    const issue6url = 'https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r';

    return (
        <main className={styles.main}>
            <section className={styles.MainMagazineOverview}>
                <img className={styles.MagazineCover} src={require('../assets/cover_issue_6.png')} alt='backstage_cover_issue_6' />
                <h3>Issue #6</h3>
                <a className={styles.MagazineBuy} href={issue6url}>Buy Here</a>
                <h4>or in <a className={styles.selectedStores} href='/stores'>selected stores</a>.</h4>
            </section>
        </main>
    );
}

export default MagazineBody;