import React from 'react';
import styles from './App.module.css';
import LeftSidebar from "./components/LeftSidebar";
import MagazineBody from "./components/MagazineBody";
import RightSidebar from "./components/RightSidebar";

function App() {

    return (
        <section className={styles.app}>
            <LeftSidebar />
            <MagazineBody />
            <RightSidebar />
        </section>
    );
}

export default App;
