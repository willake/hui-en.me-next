import React from "react";
import styles from "../../styles/project.module.scss";

type Props = {
    title: string,
    src: string,
    frameborder: string,
    allow: string
}

const VideoBlock: React.FC<Props> = ({ title, src, frameborder, allow }) => {
    return (
        <div className={styles.contentVideo}>
             <iframe src={src} title={title} allow={allow} allowFullScreen></iframe>
        </div>
    );
};

export default VideoBlock;