import React from "react";
import styles from "../../styles/project.module.scss";
import classNames from "classnames";

type Props = {
    type: string,
    size: string,
    language: string,
    role: string
}

const About: React.FC<Props> = ({ type, size, language, role }) => {
    return (
        <section className={styles.about}>
            <table className={styles.aboutTable}>
                <tbody>
                <tr>
                    <td className={styles.aboutTableItemTitle}>
                        <span className={classNames('l', 'colorGrey')}>Project Type</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('l', 'colorBlack')}>{ type } Project</span>
                    </td>
                </tr>
                <tr>
                    <td className={styles.aboutTableItemTitle}>
                        <span className={classNames('l', 'colorGrey')}>Team Size</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('l', 'colorBlack')}>{ size }</span>
                    </td>
                </tr>
                <tr>
                    <td className={styles.aboutTableItemTitle}>
                        <span className={classNames('l', 'colorGrey')}>Language</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('l', 'colorBlack')}>{ language }</span>
                    </td>
                </tr>
                <tr>
                    <td className={styles.aboutTableItemTitle}>
                        <span className={classNames('l', 'colorGrey')}>Role</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('l', 'colorBlack')}>{ role }</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default About;