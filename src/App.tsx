import React from 'react';
import styles from './App.module.css';
import LeftSidebar from "./components/LeftSidebar";
import MagazineBody from "./components/MagazineBody";
import RightSidebar from "./components/RightSidebar";


const CoverImageIssue6 = require('./assets/cover_issue_6.png');
const CoverImageIssue5 = require('./assets/cover_issue_5.png');
const CoverImageIssue4 = require('./assets/cover_issue_4.png');
const CoverImageIssue3 = require('./assets/cover_issue_3.png');
const CoverImageIssue2 = require('./assets/cover_issue_2.png');
const CoverImageIssue1 = require('./assets/cover_issue_1.png');

function App() {

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

    return (
        <section className={styles.app}>
            <LeftSidebar />
            <section className={styles.contentRow}>
                <MagazineBody {...magazines[0]}/>
                <MagazineBody {...magazines[1]}/>
                <MagazineBody {...magazines[2]}/>
                <MagazineBody {...magazines[3]}/>
                <MagazineBody {...magazines[4]}/>
                <MagazineBody {...magazines[5]}/>
            </section>
            <RightSidebar />
        </section>
    );
}

export default App;
