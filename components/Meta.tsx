import React from 'react';
import Head from 'next/head';

interface MetaProps {
  title: string;
  keywords: string;
  description: string;
}

const Meta: React.FC<MetaProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,
            initial-scale=1"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="https://hui-en.me/favicon.ico" />
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="Hui En Lin" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="https://hui-en.me/images/banner.jpg" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="hui-en.me" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hui-en.me" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@hui_gamedev" />
      <meta
        name="twitter:image"
        content="https://hui-en.me/images/banner.jpg"
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="https://www.hui-en.me/" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Hui En Lin | Game Programmer',
  description: `
                A Communicable programmer with experience in collaborating with people from different roles, 
                able to think in more than one perspective, making collaboration increasingly efficient. 
                As a programmer with professional experience in developing products with Unity for almost 3 years, 
                I have the ability of implementing gameplay features, improving graphic, designing code architecture and optimizing games effectively.`,
  keywords:
    'Game, Game Programeer, Game Developer, Hui En Lin, Hui-En Lin, Hui En, Hui-En, Willake, Programmer, Game Development',
};

export default Meta;
