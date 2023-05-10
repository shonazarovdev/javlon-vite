import React, { FC } from 'react';
import { About, Contacts, Header, Hero, Portfolio } from '@/components/index';
import {
    menuList,
    mobile__projects,
    projects__list,
    socialList,
} from '@helpers/data';

export const Home: FC = () => {
    return (
        <div className="container">
            <Header list={menuList} social={socialList} />
            <Hero />
            <About />
            <Portfolio list={projects__list} mobileList={mobile__projects} />
            <Contacts />
        </div>
    );
};
