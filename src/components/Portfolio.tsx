import { FC } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BlobSvg } from '@/assets/blob';
import * as A from '@helpers/animations';

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
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="portfolio"
            className="section portfolio">
            <div className="portfolio__wrapper">
                <motion.div
                    variants={A.portfolio__line}
                    className="portfolio__side side-line">
                    <div className="bullet__wrapper">
                        <span className="bullet"></span>
                        <p className="bullet__title">start{'>'}</p>
                    </div>
                    <div className="scroll-mouse">
                        <div className="mouse"></div>
                        <div className="scroll-mouse__title">scroll</div>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className="portfolio__header">
                    <div className="portfolio__container">
                        <motion.h2
                            variants={A.section__title}
                            className="section-title _active">
                            <span className="blob _active">
                                <BlobSvg type="large" />
                            </span>{' '}
                            Portfolio
                        </motion.h2>
                        <motion.h2
                            custom={2}
                            variants={A.section__title}
                            className="portfolio__title">
                            Let me show You...
                        </motion.h2>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={A.projects__grid}
                    className="portfolio__projects projects">
                    <motion.div
                        custom={2}
                        variants={A.projects__grid}
                        className="projects__container">
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
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{
                                                amount: 0.9,
                                                once: true,
                                            }}>
                                            <motion.div
                                                custom={item.id * 0.2}
                                                variants={A.project__box}>
                                                <div className={item.unique}>
                                                    <div
                                                        className={clsx(
                                                            'box__image',
                                                            item.type,
                                                        )}>
                                                        <img
                                                            src={item.image}
                                                            alt={
                                                                'project__' +
                                                                item.id
                                                            }
                                                        />
                                                    </div>
                                                    <h3 className="box__title">
                                                        {item.title}
                                                    </h3>
                                                    <p className="box__description">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }}
                                className="projects-header">
                                <div className="projects-header__text">
                                    <motion.div
                                        custom={1}
                                        variants={A.mobile__header}
                                        className="bullet__wrapper">
                                        <span className="bullet"></span>
                                        <p className="bullet__title">
                                            work{'>'}
                                        </p>
                                    </motion.div>
                                    <motion.h3
                                        custom={2}
                                        variants={A.mobile__header}
                                        className="header-text">
                                        MOBILE APP DESIGN PROJECTS
                                    </motion.h3>
                                </div>
                                <motion.h2
                                    custom={2.1}
                                    variants={A.mobile__header}
                                    className="projects-header__title">
                                    MOBILE
                                </motion.h2>
                            </motion.div>
                            <div className="mobile-grid">
                                {mobileList.map((item) => (
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ amount: 0.2, once: true }}
                                        className="mobile-grid__item box"
                                        key={item.id}>
                                        <motion.div
                                            custom={item.id}
                                            variants={A.mobile__projects}
                                            className={clsx(
                                                'box__image',
                                                item.unique,
                                            )}>
                                            <img
                                                src={item.image}
                                                alt={'project__' + item.id}
                                            />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};
