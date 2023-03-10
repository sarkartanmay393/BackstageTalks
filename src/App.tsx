import React, { createContext, useState } from 'react';
import styles from './App.module.css';
import FooterLeftArea from "./components/FooterLeftArea";
import MagazineBody from "./components/MagazineBody";
import FooterRightArea from "./components/FooterRightArea";
import LogoIcon from './assets/logo.png';


const CoverImageIssue6 = require('./assets/cover_issue_6.png');
const CoverImageIssue5 = require('./assets/cover_issue_5.png');
const CoverImageIssue4 = require('./assets/cover_issue_4.png');
const CoverImageIssue3 = require('./assets/cover_issue_3.png');
const CoverImageIssue2 = require('./assets/cover_issue_2.png');
const CoverImageIssue1 = require('./assets/cover_issue_1.png');

export const BgColor = createContext<any>({});

function App() {
    const [isMobile, setIsMobile] = useState(window.screen.width < 600);
    const magazines = [
        {
            name: "Issue #6",
            buy_link: "https://brot.sk/products/backstage-talks-issue-6?_pos=2&_sid=1c5730cc8&_ss=r",
            stockAvailable: true,
            image: CoverImageIssue6,
            primaryColor: 'deeppink',
            backgroundColor: 'white',
        },
        {
            name: "Issue #5",
            buy_link: "https://brot.sk/products/backstage-talks-5?_pos=3&_sid=1c5730cc8&_ss=r",
            stockAvailable: true,
            image: CoverImageIssue5,
            primaryColor: 'white',
            backgroundColor: '#00c1b5',
        },
        {
            name: "Issue #4",
            buy_link: "",
            stockAvailable: false,
            image: CoverImageIssue4,
            primaryColor: 'black',
            backgroundColor: '#ff651a',
        },
        {
            name: "Issue #3",
            buy_link: "https://brot.sk/products/backstage-talks-3?_pos=4&_sid=1c5730cc8&_ss=r",
            stockAvailable: true,
            image: CoverImageIssue3,
            primaryColor: 'white',
            backgroundColor: '#ffbe00',
        },
        {
            name: "Issue #2",
            buy_link: "https://brot.sk/products/backstage-talks-2?_pos=1&_sid=1c5730cc8&_ss=r",
            stockAvailable: true,
            image: CoverImageIssue2,
            primaryColor: 'white',
            backgroundColor: '#1d3fbb',
        },
        {
            name: "Issue #1",
            buy_link: "",
            stockAvailable: false,
            image: CoverImageIssue1,
            primaryColor: 'white',
            backgroundColor: '#e30512',
        },
    ];
    const Reload = () => {
        setIsMobile(window.screen.width < 600);
        window.open('/', '_self');
    }

    const [bgColor, setBgColor] = useState("white");

    return (
        <BgColor.Provider value={setBgColor}>
            <section className={styles.app}>
                <header className={styles.LeftSideBar}>
                    <img className={styles.headerImage} src={LogoIcon} alt='backstage-logo' onClick={Reload} />
                    {/* If mobile, LeftSidebar is become row & will hold Logo and MailText*/}
                    {isMobile ? <a className={styles.MailText} href='mailto:info@backstagetalks.com'><h4>info@backstagetalks.com</h4></a> : <FooterLeftArea />}
                </header>
                <section className={styles.contentRow} style={{
                    // backgroundColor: bgColor,
                    animationDelay: "calc(var(--bg))"
                }}>
                    <MagazineBody {...magazines[0]} />
                    <MagazineBody {...magazines[1]} />
                    <MagazineBody {...magazines[2]} />
                    <MagazineBody {...magazines[3]} />
                    <MagazineBody {...magazines[4]} />
                    <MagazineBody {...magazines[5]} />
                    {isMobile ? <FooterLeftArea /> : <></>}
                </section>
                {isMobile ?
                    <></> :
                    <footer className={styles.footer}>
                        {/* If mobile, footer is become row & will hold footerleft*/}
                        <a className={styles.MailText} href='mailto:info@backstagetalks.com'>
                            <h4>info@backstagetalks.com</h4> </a>
                        <FooterRightArea />
                    </footer>
                }

            </section>
        </BgColor.Provider>
    );
}

export default App;
