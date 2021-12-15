import styles from '../../styles/Home.module.scss';
import React from 'react';
import classNames from 'classnames';

type Props = {
    title: string,
    
}

const PortfolioItem: React.FC<Props> = ({ link, previewImageLink, title, usedTools }) => {

    return (
        <>
            <h2 class="portfolio__title h1">Professional Projects</h2>
            <div class="portfolio__row">
                {{ range where (where .Site.Pages "Section" "projects") "Params.projecttype" "Professional" }}
                    <a title="{{ .Title }}" class="portfolio__item" href="{{ .Permalink }}">
                        <div class="portfolio__item__body" style="background-image: url({{ .Params.preview }});">
                            <div class="portfolio__item__overlay"></div>
                            <div class="portfolio__item__text">
                                <h2 class="portfolio__item__title">{{ .Title }}</h1>
                            </div>
                        </div>
                        <div class="portfolio__item__tags">
                            {{ range .Params.toolsused }}
                            <div class="portfolio__item__tag color__white">{{ . }}</div>
                            {{ end }}
                        </div>
                    </a>
                {{ end }}
            </div>
        </>
    );
};

export default PortfolioItem;