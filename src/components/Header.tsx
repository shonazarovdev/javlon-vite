import { FC, useEffect, useState } from 'react';
import { scrollToSection } from '@helpers/helpers';
import clsx from 'clsx';
import { FacebookSvg, InstagramSvg, LogoSvg, TelegramSvg } from '@assets/icons';
import { BlobSvg } from '@/assets/blob';

interface IHeader {
    list: {
        id: number;
        name: string;
        title: string;
    }[];
    social: {
        id: number;
        name: string;
        icon: string;
        link: string;
    }[];
}

export const Header: FC<IHeader> = ({ list, social }) => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [onScroll, setOnScroll] = useState<boolean>(false);

    type TIcons = {
        telegram: JSX.Element;
        instagram: JSX.Element;
        facebook: JSX.Element;
    };

    const Icons: TIcons = {
        telegram: <TelegramSvg />,
        instagram: <InstagramSvg />,
        facebook: <FacebookSvg />,
    };

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const pageUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setOnScroll(window.scrollY >= 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="header">
            <div className={clsx('header__wrapper', onScroll && '_active')}>
                <div className="header__container">
                    <div
                        className={clsx('header__body', onScroll && '_active')}>
                        <div
                            className="header__logo logo-wrapper fadeIn"
                            onClick={pageUp}>
                            <LogoSvg />
                        </div>
                        <div className="header__menu menu fadeIn">
                            <nav
                                className={clsx(
                                    'menu__body',
                                    openMenu && '_active',
                                )}>
                                <ul className="menu-list">
                                    {list.map((item) => (
                                        <li
                                            key={item.id}
                                            className="menu-list__item">
                                            <p
                                                className={clsx(
                                                    'menu-list__link ellipse',
                                                    activeSection ===
                                                        item.name && '_active',
                                                )}
                                                onClick={() =>
                                                    scrollToSection(item.name)
                                                }>
                                                {item.title}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="header__social fadeIn">
                            <ul className="social-list">
                                {social.map((item) => (
                                    <li
                                        key={item.id}
                                        className="social-list__item">
                                        <a
                                            href={item.link}
                                            className="social-list__link">
                                            {Icons[item.name as keyof TIcons]}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button
                            type="button"
                            className={clsx(
                                'menu__icon icon-menu',
                                openMenu && '_active',
                            )}
                            onClick={handleOpenMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
