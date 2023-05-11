import { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from '@/assets/icons';
import * as A from '@helpers/animations';

export const Hero: FC = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            id="home"
            className="section hero fadeIn">
            <div className="hero__background">
                <img src="/images/header_img.png" alt="hero_img" />
            </div>
            <div className="hero__wrapper">
                <div className="hero__body">
                    <div className="hero__main">
                        <motion.h1
                            variants={A.hero__header}
                            className="hero__title">
                            Hello, my name is Javlonbek <br /> I’m{' '}
                            <span>UI/UX</span> Designer
                        </motion.h1>
                        <div className="hero-programs hero__container">
                            <ul className="programs-list">
                                <motion.li
                                    custom={1}
                                    variants={A.hero__programs}
                                    className="programs-list__item">
                                    <img
                                        src="/images/program_1.png"
                                        alt="program 1"
                                    />
                                </motion.li>
                                <motion.li
                                    custom={2}
                                    variants={A.hero__programs}
                                    className="programs-list__item">
                                    <img
                                        src="/images/program_2.png"
                                        alt="program 2"
                                    />
                                </motion.li>
                                <motion.li
                                    custom={3}
                                    variants={A.hero__programs}
                                    className="programs-list__item">
                                    <img
                                        src="/images/program_3.png"
                                        alt="program 3"
                                    />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="hero__bottom">
                        <div className="mouse-wrapper">
                            <div className="mouse"></div>
                        </div>
                        <span className="arrow-animation">
                            <ArrowDown />
                        </span>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
