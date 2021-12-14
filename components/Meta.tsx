import React from 'react';
import Head from 'next/head';

interface MetaProps {
    title: string,
    keywords: string,
    description: string
}
// cover
// Global site tag (gtag.js) - Google Analytics
// <!-- Global site tag (gtag.js) - Google Analytics -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-111797252-1"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'UA-111797252-1');
// </script>

const Meta : React.FC<MetaProps> = ({ title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport'
            content='width=device-width,
            initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content = {description} />
            <meta charSet='utf-8' />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="author" content="Hui En Lin" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content="/images/cover.jpg" />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="hui-en.me" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://hui-en.me" />
            <meta name="twitter:card"
                    content="summary_large_image" />
            <meta name="twitter:creator"
                    content="@WillakeLin" />
            <meta name="twitter:image"
                    content="/images/cover.jpg" />
            <meta name="twitter:title"
                    content={title} />
            <meta name="twitter:description"
                    content={description} />
            <meta name="twitter:site"
                    content="https://www.hui-en.me/" />
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'ChiHuaHua',
    keywords: 'chihuahua memecoin crypto',
    description: 'an animated memecoin'
}

export default Meta;