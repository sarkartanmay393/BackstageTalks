import React from "react";
import styles from "./FooterRightArea.module.css";

const FooterRightArea = () => {
    return (
        <section className={styles.FooterRight}>
            <a href='/#issue6'>Issue #6</a>
            <a href='/#issue5'>Issue #5</a>
            <a href='/#issue4'>Issue #4</a>
            <a href='/#issue3'>Issue #3</a>
            <a href='/#issue2'>Issue #2</a>
            <a href='/#issue1'>Issue #1</a>
        </section>
    );
}

export default FooterRightArea;