import { FC } from 'react';
import {
    EmailIcon,
    FacebookSvg,
    InstagramSvg,
    PhoneIcon,
    SocialIcon,
    TelegramSvg,
} from '@/assets/icons';
import { BlobSvg } from '@/assets/blob';

export const Contacts: FC = () => {
    return (
        <section id="contacts" className="section contacts">
            <div className="contacts__wrapper contacts__container">
                <div className="contacts__body">
                    <h2 className="section-title _active">
                        <span className="blob _active">
                            <BlobSvg type="large" />
                        </span>{' '}
                        Contacts
                    </h2>
                    <ul className="contacts-list">
                        <li className="contacts-list__item">
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
                        </li>
                        <li className="contacts-list__item">
                            <span className="contacts-list__icon icon-ellipsis">
                                <EmailIcon />
                            </span>
                            <div className="contacts-list__content">
                                <h3 className="contacts-list__title">Email</h3>
                                <a
                                    href="mailto:javlanbay@gmail.com"
                                    className="contacts-list__text contacts__link">
                                    javlanbay@gmail.com
                                </a>
                            </div>
                        </li>
                        <li className="contacts-list__item">
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
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
