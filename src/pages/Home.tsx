import React, { FC } from 'react';
import { About, Contact, Header, Hero, Portfolio } from '@components/index';
import { menuList, socialList } from '@helpers/data';

export const Home: FC = () => {
    return (
        <div className="container scroll-container">
            <Header list={menuList} social={socialList} />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
};
