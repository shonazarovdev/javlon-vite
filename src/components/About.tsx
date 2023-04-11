import { ArrowDown, Download, DownloadIcon } from '@/assets/icons';
import React, { FC } from 'react';

export const About: FC = () => {
    return (
        <section id="about" className="section about">
            <div className="about__wrapper">
                <div className="about__container">
                    <div className="about__body">
                        <h2 className="section-title ellipse _active">About</h2>
                        <div className="about__main">
                            <div className="about__left">
                                <h2 className="about__title">
                                    Hello everyone!
                                </h2>
                                <div className="about__text">
                                    My name is Javlonbek, I am 21 years old and
                                    I am from Uzbekistan, I have been doing
                                    UI/UX design for years, During this time I
                                    have drawn a lot, below you can see my work,
                                    at the moment I work in an IT company called
                                    Appx Tech Group, I studied a lot there, and
                                    for a long time I am working, I can say that
                                    this is my first IT company and I hope that
                                    we will achieve a lot together.
                                </div>
                                <div className="about-cv">
                                    <div className="about-cv__icon">
                                        <DownloadIcon />
                                    </div>
                                    <div className="about-cv__content">
                                        <h2 className="about-cv__title">
                                            My CV link
                                        </h2>
                                        <a href="#" className="about-cv__link">
                                            Download{' '}
                                            <span>
                                                <Download />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="about__right">
                                <div className="about-image__wrapper">
                                    <img
                                        src="/images/about_img.png"
                                        alt="about-img"
                                        className="about-image"
                                    />
                                </div>
                            </div>
                        </div>
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
        </section>
    );
};
