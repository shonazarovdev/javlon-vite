import { FC, useEffect, useRef, useState } from 'react';
import {
    About,
    Contacts,
    Footer,
    Header,
    Hero,
    Portfolio,
} from '@/components/index';
import {
    menuList,
    mobile__projects,
    projects__list,
    socialList,
} from '@helpers/data';

export const Home: FC = () => {
    const [scroll, setScroll] = useState(0);
    const block = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className="container">
                <Header list={menuList} social={socialList} />
                <Hero />
                <About />
                <Portfolio
                    list={projects__list}
                    mobileList={mobile__projects}
                />
                <Contacts />
                <Footer list={menuList} />
            </div>
        </>
    );
};
