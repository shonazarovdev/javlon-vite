import { FC, ReactNode, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { BlobSvg } from '@/assets/blob';
import * as A from '@helpers/animations';
import { ProjectsHeader } from './ProjectsHeader';
import useWindowSize from '@/hooks/useWindowSize';

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
    const [sideLineHeight, setSideLineHeight] = useState<number | undefined>(0);
    const { width } = useWindowSize();

    useEffect(() => {
        setSideLineHeight(
            window.document.querySelector('.portfolio')?.clientHeight,
        );
    }, []);

    useEffect(() => {
        const boxes: NodeListOf<Element> =
            document.querySelectorAll('.project__box');

        boxes.forEach((box: Element) => {
            (box as HTMLElement).addEventListener(
                'mousemove',
                (e: MouseEvent) => {
                    // Get position pointer in width (px)
                    const positionPx =
                        e.clientX -
                        (box as HTMLDivElement).getBoundingClientRect().left;
                    // Convert to %
                    const positionX =
                        (positionPx / (box as HTMLElement).offsetWidth) * 100;
                    // Get position pointer in height (px)
                    const positionPy =
                        e.clientY -
                        (box as HTMLElement).getBoundingClientRect().top;
                    // Convert to %
                    const positionY =
                        (positionPy / (box as HTMLElement).offsetHeight) * 100;

                    (box as HTMLElement).style.transform = `rotateX(${
                        0.5 * (50 - positionY)
                    }deg) rotateY(${
                        0.5 * -(50 - positionX)
                    }deg) scale3d(1.05, 1.05, 1.05 )`;
                },
            );
            (box as HTMLElement).addEventListener('mouseout', () => {
                (
                    box as HTMLElement
                ).style.transform = `rotateX(0deg) rotateY(0deg)`;
            });
        });
    }, []);

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="portfolio"
            className="section portfolio">
            <div className="portfolio__wrapper">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.2, once: true }}
                    className="portfolio__header">
                    <div className="portfolio__container">
                        <motion.div
                            variants={A.portfolio__line}
                            className="portfolio__side side-line"
                            style={{
                                minHeight: sideLineHeight,
                            }}>
                            <div className="bullet__wrapper">
                                <span className="bullet"></span>
                                <p className="bullet__title">start{'>'}</p>
                            </div>
                            <div className="scroll-mouse">
                                <div className="mouse"></div>
                                <div className="scroll-mouse__title">
                                    scroll
                                </div>
                            </div>
                        </motion.div>
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
                        <motion.div
                            variants={A.portfolio__image}
                            className="portfolio__image">
                            <img
                                src="/images/bag.png"
                                alt="bag_img"
                                className="bag"
                            />
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="portfolio__projects projects">
                    <div className="projects__container">
                        <div className="projects__body">
                            <ProjectsHeader
                                title="WEB DESIGN PROJECTS"
                                bullet="work"
                                header="WEB"
                            />
                            <div className="projects-grid">
                                {list.map((item) => (
                                    <div
                                        className="projects-grid__item box"
                                        key={item.id}>
                                        <div
                                            className={clsx(
                                                'project__wrapper',
                                                item.unique,
                                            )}>
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                custom={item.id * 0.5}
                                                viewport={{
                                                    amount: 0.1,
                                                    once: true,
                                                }}
                                                variants={A.project__box}
                                                className={clsx(
                                                    width && width <= 769
                                                        ? ''
                                                        : 'project__box',
                                                )}>
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
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <ProjectsHeader
                                title="MOBILE APP DESIGN PROJECTS"
                                bullet="work"
                                header="MOBILE"
                            />
                            <div className="mobile-grid">
                                {mobileList.map((item) => (
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{
                                            amount: 0.2,
                                            once: true,
                                        }}
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
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};
