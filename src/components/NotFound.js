import React from "react";
import NoResults from "../assets/no-results.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

// component to be displayed when a query or filter doesn't
// find any results
const NotFound = () => {
    return (
        <div className={styles.NotFound}>
            <Asset
                src={NoResults}
                message={`Sorry, the page you're looking for doesn't exist`}
            />
        </div>
    );
};

export default NotFound;