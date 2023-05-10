import clsx from 'clsx';
import { FC } from 'react';

interface IPortfolio {
    list: {
        id: number;
        title: string;
        description: string;
        image: string;
        unique: string;
        type: string;
    }[];

    mobileList: {
        id: number;
        image: string;
        unique: string;
    }[];
}

export const Portfolio: FC<IPortfolio> = ({ list, mobileList }) => {
    return (
        <section id="portfolio" className="section portfolio">
            <div className="portfolio__wrapper">
                <div className="portfolio__side side-line">
                    <div className="bullet__wrapper">
                        <span className="bullet"></span>
                        <p className="bullet__title">start{'>'}</p>
                    </div>
                    <div className="scroll-mouse">
                        <div className="mouse"></div>
                        <div className="scroll-mouse__title">scroll</div>
                    </div>
                </div>
                <div className="portfolio__header">
                    <div className="portfolio__container">
                        <h2 className="section-title ellipse _active">
                            Portfolio
                        </h2>
                        <h2 className="portfolio__title">Let me show You...</h2>
                    </div>
                </div>
                <div className="portfolio__projects projects">
                    <div className="projects__container">
                        <div className="projects__body">
                            <div className="projects-header">
                                <div className="projects-header__text">
                                    <div className="bullet__wrapper">
                                        <span className="bullet"></span>
                                        <p className="bullet__title">
                                            work{'>'}
                                        </p>
                                    </div>
                                    <h3 className="header-text">
                                        WEB DESIGN PROJECTS
                                    </h3>
                                </div>
                                <h2 className="projects-header__title">WEB</h2>
                            </div>
                            <div className="projects-grid">
                                {list.map((item) => (
                                    <div
                                        className="projects-grid__item box"
                                        key={item.id}>
                                        <div className={item.unique}>
                                            <div
                                                className={clsx(
                                                    'box__image',
                                                    item.type,
                                                )}>
                                                <img
                                                    src={item.image}
                                                    alt={'project__' + item.id}
                                                />
                                            </div>
                                            <h3 className="box__title">
                                                {item.title}
                                            </h3>
                                            <p className="box__description">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="projects-header">
                                <div className="projects-header__text">
                                    <div className="bullet__wrapper">
                                        <span className="bullet"></span>
                                        <p className="bullet__title">
                                            work{'>'}
                                        </p>
                                    </div>
                                    <h3 className="header-text">
                                        MOBILE APP DESIGN PROJECTS
                                    </h3>
                                </div>
                                <h2 className="projects-header__title">
                                    MOBILE
                                </h2>
                            </div>
                            <div className="mobile-grid">
                                {mobileList.map((item) => (
                                    <div
                                        className="mobile-grid__item box"
                                        key={item.id}>
                                        <div
                                            className={clsx(
                                                'box__image',
                                                item.unique,
                                            )}>
                                            <img
                                                src={item.image}
                                                alt={'project__' + item.id}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
