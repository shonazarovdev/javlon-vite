import { ArrowDown } from '@/assets/icons';
import clsx from 'clsx';
import React, { FC } from 'react';

export const Hero: FC = () => {
    return (
        <section id="home" className="section hero fadeIn">
            <div className="hero__wrapper">
                <div className="hero__body">
                    <div className="hero__main">
                        <div className="hero__title">
                            Hello, my name is Javlonbek <br /> I’m{' '}
                            <span>UI/UX</span> Designer
                        </div>
                        <div className="hero-programs hero__container">
                            <ul className="programs-list">
                                <li className="programs-list__item">
                                    <img
                                        src="/images/program_1.png"
                                        alt="program 1"
                                    />
                                </li>
                                <li className="programs-list__item">
                                    <img
                                        src="/images/program_2.png"
                                        alt="program 2"
                                    />
                                </li>
                                <li className="programs-list__item">
                                    <img
                                        src="/images/program_3.png"
                                        alt="program 3"
                                    />
                                </li>
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
        </section>
    );
};
