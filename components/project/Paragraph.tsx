import React from "react";
import styles from "../../styles/project.module.scss";

const Paragraph: React.FC = ({ children }) => {
    return (
        <p className={styles.contentParagraph}>
            {children}
        </p>
    );
};

export default Paragraph;