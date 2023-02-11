import { useContext, useEffect, useState } from "react";
import { BgColor } from "../App";
import styles from "./MagazineBody.module.css";

interface magazine {
    name: string,
    buy_link: string,
    stockAvailable: boolean,
    image: any
    primaryColor: string,
    backgroundColor: string,
}

function isInViewport(element: HTMLElement | null) {
    if (element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

const MagazineBody = ({ name, buy_link, stockAvailable, image, primaryColor, backgroundColor }: magazine) => {
    const setBgColor = useContext(BgColor);
    window.onscroll = () => {
        if (isInViewport(document.getElementById(name))) {
            setBgColor(backgroundColor);
        }
    }


    return (
        <main id={name} className={styles.main} style={{ backgroundColor: backgroundColor }} >
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