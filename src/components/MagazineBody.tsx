import { useEffect, useState } from "react";
import styles from "./MagazineBody.module.css";

interface magazine {
    name: string,
    buy_link: string,
    stockAvailable: boolean,
    image: any
    primaryColor: string,
    backgroundColor: string,
    setColor: any
}

const MagazineBody = ({ name, buy_link, stockAvailable, image, primaryColor, backgroundColor, setColor}: magazine) => {
    // window.onscroll = () => {
    //     const screenHeight = window.screen.height;
    //     if (document.body.offsetHeight > screenHeight) {

    //     }
    // };

    return (
        <main className={styles.main} >
            <section className={styles.MainMagazineOverview}>
                <img className={styles.MagazineCover} src={image} alt='backstage_cover_issue_6' />
                {stockAvailable ?
                    <>
                        <h3>{name}</h3>
                        <a className={styles.MagazineBuy} href={buy_link} style={{ color: primaryColor }}>Buy Here</a>
                        <h4>or in <a className={styles.selectedStores} href='/stores' style={{ color: primaryColor }}>selected stores</a>.</h4>

                    </> :
                    <>
                        <h3>{name} is sold out!</h3>
                        <h4 className={styles.lastLine}>If you are lucky, you may get the last pieces in <a className={styles.selectedStores} href='/stores' style={{ color: primaryColor }}>selected stores</a>.</h4>
                    </>
                }
            </section>
        </main>
    );
}

export default MagazineBody;