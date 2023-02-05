import React from "react";
import styles from "./RightSidebar.module.css";

const RightSidebar = () => {
    return (
        <footer className={styles.footer}>
            <a href='mailto:info@backstagetalks.com'><h4>info@backstagetalks.com</h4></a>
            <section className={styles.FooterRight}>
                <a href='/#issue6'>Issue #6</a>
                <a href='/#issue5'>Issue #5</a>
                <a href='/#issue4'>Issue #4</a>
                <a href='/#issue3'>Issue #3</a>
                <a href='/#issue2'>Issue #2</a>
                <a href='/#issue1'>Issue #1</a>
            </section>
        </footer>
    );
}

export default RightSidebar;