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
            <link rel="icon" href="https://hui-en.me/favicon.ico" />
            <title>{title}</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="author" content="Hui En Lin" />
            <meta property="og:title" content={title} />
            <meta property="og:image" content="https://hui-en.me/images/cover.jpg" />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content="hui-en.me" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://hui-en.me" />
            <meta name="twitter:card"
                    content="summary_large_image" />
            <meta name="twitter:creator"
                    content="@WillakeLin" />
            <meta name="twitter:image"
                    content="https://hui-en.me/images/cover.jpg" />
            <meta name="twitter:title"
                    content={title} />
            <meta name="twitter:description"
                    content={description} />
            <meta name="twitter:site"
                    content="https://www.hui-en.me/" />
            <link rel="shortcut icon" href="https://hui-en.me/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="https://hui-en.me/favicon.ico" type="image/x-icon" />
        </Head>
    )
}

Meta.defaultProps = {
        title: 'Hui-En Lin | Game Programmer',
        description: `
                A Communicable programmer with experience in collaborating with people from different roles, 
                able to think in more than one perspective, making collaboration increasingly efficient. 
                As a programmer with professional experience in developing products with Unity for almost 3 years, 
                I have the ability of implementing gameplay features, improving graphic, designing code architecture and optimizing games effectively.`,
        keywords: 'Game, Game Programeer, Game Developer, Hui En Lin, Hui-En, Willake, Programmer, Game Development'
}

export default Meta;