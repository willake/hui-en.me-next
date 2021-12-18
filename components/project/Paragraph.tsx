import classNames from "classnames";
import React from "react";
import styles from "../../styles/project.module.scss";

const Paragraph: React.FC = ({ children }) => {
    return (
        <p className={classNames(styles.contentParagraph, 'l')}>
            {children}
        </p>
    );
};

export default Paragraph;