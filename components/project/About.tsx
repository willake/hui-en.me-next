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
                        <span className={classNames('m', 'colorGrey')}>Project Type</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('m', 'colorBlack')}>{ type } Project</span>
                    </td>
                </tr>
                <tr>
                    <td className={styles.aboutTableItemTitle}>
                        <span className={classNames('m', 'colorGrey')}>Team Size</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('m', 'colorBlack')}>{ size }</span>
                    </td>
                </tr>
                <tr>
                    <td className={styles.aboutTableItemTitle}>
                        <span className={classNames('m', 'colorGrey')}>Language</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('m', 'colorBlack')}>{ language }</span>
                    </td>
                </tr>
                <tr>
                    <td className={styles.aboutTableItemTitle}>
                        <span className={classNames('m', 'colorGrey')}>Role</span>
                    </td>
                    <td className={styles.aboutTableItemContent}>
                        <span className={classNames('m', 'colorBlack')}>{ role }</span>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default About;