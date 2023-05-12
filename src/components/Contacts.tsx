import { FC } from 'react';
import { motion } from 'framer-motion';
import {
    EmailIcon,
    FacebookSvg,
    InstagramSvg,
    PhoneIcon,
    SocialIcon,
    TelegramSvg,
} from '@/assets/icons';
import { BlobSvg } from '@/assets/blob';
import * as A from '@helpers/animations';

export const Contacts: FC = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            id="contacts"
            className="section contacts">
            <div className="contacts__wrapper contacts__container">
                <div className="contacts__body">
                    <motion.h2
                        variants={A.section__title}
                        className="section-title _active">
                        <span className="blob _active">
                            <BlobSvg type="large" />
                        </span>{' '}
                        Contacts
                    </motion.h2>
                    <div className="contact-main">
                        <div className="contact-left">
                            <motion.div
                                variants={A.contact__image}
                                className="contact-left__image"></motion.div>
                        </div>
                        <div className="contact-right">
                            <motion.ul
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ amount: 0.2, once: true }}
                                className="contacts-list">
                                <motion.li
                                    custom={1}
                                    variants={A.contact__list}
                                    className="contacts-list__item">
                                    <span className="contacts-list__icon icon-ellipsis">
                                        <PhoneIcon />
                                    </span>
                                    <div className="contacts-list__content">
                                        <h3 className="contacts-list__title">
                                            My phone number
                                        </h3>
                                        <ul className="phone-number-list">
                                            <li className="phone-number-list__item">
                                                <a
                                                    href="tel:+998904299019"
                                                    className="contacts__link">
                                                    +998904299019 (main)
                                                </a>
                                            </li>
                                            <li className="phone-number-list__item">
                                                <a
                                                    href="tel:+998937599019"
                                                    className="contacts__link">
                                                    +998937599019
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.li>
                                <motion.li
                                    custom={2}
                                    variants={A.contact__list}
                                    className="contacts-list__item">
                                    <span className="contacts-list__icon icon-ellipsis">
                                        <EmailIcon />
                                    </span>
                                    <div className="contacts-list__content">
                                        <h3 className="contacts-list__title">
                                            Email
                                        </h3>
                                        <a
                                            href="mailto:javlanbay@gmail.com"
                                            className="contacts-list__text contacts__link">
                                            javlanbay@gmail.com
                                        </a>
                                    </div>
                                </motion.li>
                                <motion.li
                                    custom={3}
                                    variants={A.contact__list}
                                    className="contacts-list__item">
                                    <span className="contacts-list__icon icon-ellipsis">
                                        <SocialIcon />
                                    </span>
                                    <div className="contacts-list__content">
                                        <h3 className="contacts-list__title">
                                            Social links
                                        </h3>
                                        <ul className="social-list">
                                            <li className="social-list__item">
                                                <a href="#">
                                                    <InstagramSvg />
                                                </a>
                                            </li>
                                            <li className="social-list__item">
                                                <a href="#">
                                                    <TelegramSvg />
                                                </a>
                                            </li>
                                            <li className="social-list__item">
                                                <a href="#">
                                                    <FacebookSvg />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.li>
                            </motion.ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};
