import React from "react";
import styles from "./MagazineBody.module.css";

interface magazine {
    name: string,
    buy_link: string,
    stockAvailable: boolean,
    image: any
}

const MagazineBody = ({ name, buy_link, stockAvailable, image}: magazine) => {
    return (
        <main className={styles.main}>
            <section className={styles.MainMagazineOverview}>
                <img className={styles.MagazineCover} src={image} alt='backstage_cover_issue_6' />
                {stockAvailable ?
                        <>
                            <h3>{name}</h3>
                            <a className={styles.MagazineBuy} href={buy_link}>Buy Here</a>
                            <h4>or in <a className={styles.selectedStores} href='/stores'>selected stores</a>.</h4>

                        </> :
                    <>
                        <h3>{name} is sold out!</h3>
                        <h4 className={styles.lastLine}>If you are lucky, you may get the last pieces in <a className={styles.selectedStores} href='/stores'>selected stores</a>.</h4>
                    </>
                }
            </section>
        </main>
    );
}

export default MagazineBody;