import React from "react";
import ResponseSection from "../components/ResponseSection.tsx";
import styles from "./styles.module.css"
import RequestHistory from "../components/RequestHistory.tsx";

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.requestHistory}>
                <RequestHistory/>
            </div>
            <div className={styles.responseSection}>
                <ResponseSection/>
            </div>
        </div>
    )
}

export default Home