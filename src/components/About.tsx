import { FC } from 'react';
import { motion } from 'framer-motion';
import { BlobSvg } from '@/assets/blob';
import { ArrowDown, Download, DownloadIcon } from '@/assets/icons';
import * as A from '@helpers/animations';

export const About: FC = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="about"
            className="section about">
            <div className="about__wrapper">
                <div className="about__container">
                    <div className="about__body">
                        <motion.h2
                            variants={A.section__title}
                            className="section-title _active">
                            <span className="blob _active">
                                <BlobSvg type="large" />
                            </span>{' '}
                            About
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="about__main">
                            <div className="about__left">
                                <motion.h2
                                    custom={1}
                                    variants={A.about__text}
                                    className="about__title">
                                    Hello everyone!
                                </motion.h2>
                                <motion.p
                                    custom={2}
                                    variants={A.about__text}
                                    className="about__text">
                                    My name is Javlonbek, I am 21 years old and
                                    I am from Uzbekistan, I have been doing
                                    UI/UX design for years, During this time I
                                    have drawn a lot, below you can see my work,
                                    at the moment I work in an IT company called
                                    Appx Tech Group, I studied a lot there, and
                                    for a long time I am working, I can say that
                                    this is my first IT company and I hope that
                                    we will achieve a lot together.
                                </motion.p>
                                <motion.div
                                    custom={3}
                                    variants={A.about__text}
                                    className="about-cv">
                                    <div className="about-cv__icon icon-ellipsis">
                                        <DownloadIcon />
                                    </div>
                                    <div className="about-cv__content">
                                        <h2 className="about-cv__title">
                                            My CV link
                                        </h2>
                                        <a
                                            href="/pdf/Resume.pdf"
                                            download="resume.pdf"
                                            className="about-cv__link">
                                            Download{' '}
                                            <span>
                                                <Download />
                                            </span>
                                        </a>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.8, once: true }}
                                className="about__right">
                                <motion.div
                                    variants={A.about__image}
                                    className="about-image__wrapper">
                                    <img
                                        src="/images/about_img.png"
                                        alt="about-img"
                                        className="about-image"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                        <div className="about__bottom">
                            <div className="mouse-wrapper">
                                <div className="mouse"></div>
                            </div>
                            <span className="arrow-animation">
                                <ArrowDown />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
