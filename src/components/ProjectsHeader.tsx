import React, { FC } from 'react';
import { motion } from 'framer-motion';
import * as A from '@helpers/animations';

interface IProjectsHeader {
    title: string;
    bullet: string;
    header: string;
}

export const ProjectsHeader: FC<IProjectsHeader> = ({
    title,
    bullet,
    header,
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="projects-header">
            <div className="projects-header__text">
                <motion.div
                    custom={1}
                    variants={A.projects_header}
                    className="bullet__wrapper">
                    <span className="bullet"></span>
                    <p className="bullet__title">
                        {bullet}
                        {'>'}
                    </p>
                </motion.div>
                <motion.h3
                    custom={2}
                    variants={A.projects_header}
                    className="header-text">
                    {title}
                </motion.h3>
            </div>
            <motion.h2
                custom={2.1}
                variants={A.projects_header}
                className="projects-header__title">
                {header}
            </motion.h2>
        </motion.div>
    );
};
