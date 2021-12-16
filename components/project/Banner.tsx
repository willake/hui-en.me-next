import React from "react";
import styles from "../../styles/project.module.scss";
import classNames from "classnames";

type Props = {
    title: string
}

const Banner: React.FC<Props> = ({ title }) => {
    return (
        <section className={styles.banner}>
            <div className={styles.bannerTitle}>
                <span className={classNames('xxl', 'colorBlack')}>{ title }</span>
            </div>
        </section>
    );
};

export default Banner;