import { FC } from 'react';
import { motion } from 'framer-motion';
import { LogoSvg } from '@/assets/icons';
import { scrollToSection } from '@/helpers/helpers';
import * as A from '@helpers/animations';
import useWindowSize from '@/hooks/useWindowSize';

interface IFooter {
    list: {
        id: number;
        name: string;
        title: string;
    }[];
}

export const Footer: FC<IFooter> = ({ list }) => {
    const { width } = useWindowSize();
    const isMobile = width && width <= 768;

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="footer">
            <motion.div
                custom={1}
                variants={A.footer__animation}
                className="footer__wrapper">
                {width && width > 426 && (
                    <motion.div
                        custom={1}
                        variants={A.footer__animation}
                        className="ellipse">
                        <img src="/images/footer_img.png" alt="ellipse" />
                    </motion.div>
                )}
                <div className="footer__container">
                    <div className="footer__body">
                        {!isMobile && (
                            <div className="footer__top">
                                <div className="footer__logo">
                                    <LogoSvg />
                                </div>
                                <ul className="footer-list">
                                    {list.map((item) => (
                                        <motion.li
                                            custom={item.id + 1}
                                            variants={A.footer__animation}
                                            key={item.id}
                                            className="footer-list__item">
                                            <p
                                                className="footer-list__link"
                                                onClick={() =>
                                                    scrollToSection(item.name)
                                                }>
                                                {item.title}
                                            </p>
                                        </motion.li>
                                    ))}
                                </ul>
                                <ul className="footer-programs__list">
                                    <motion.li
                                        custom={2}
                                        variants={A.footer__animation}
                                        className="footer-programs__item">
                                        <img
                                            src="/images/program_1.png"
                                            alt="program_1"
                                        />
                                    </motion.li>
                                    <motion.li
                                        custom={3}
                                        variants={A.footer__animation}
                                        className="footer-programs__item">
                                        <img
                                            src="/images/program_2.png"
                                            alt="program_2"
                                        />
                                    </motion.li>
                                    <motion.li
                                        custom={4}
                                        variants={A.footer__animation}
                                        className="footer-programs__item">
                                        <img
                                            src="/images/program_3.png"
                                            alt="program_3"
                                        />
                                    </motion.li>
                                </ul>
                            </div>
                        )}
                        <div className="footer__bottom">
                            <p className="footer__text">
                                <motion.span
                                    custom={3}
                                    variants={A.footer__animation}>
                                    All rights belong to the author of the site
                                </motion.span>
                            </p>
                            <motion.div
                                custom={3}
                                variants={A.footer__animation}
                                className="developer">
                                Made by:{' '}
                                <a
                                    href="https://github.com/themaverickmu"
                                    className="developer-link">
                                    themaverickmu
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.footer>
    );
};
