const hero__header = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const hero__programs = {
    hidden: {
        y: -100,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const section__title = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const about__text = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3 }
    })
}

const about__image = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}

const portfolio__line = {
    hidden: {
        y: 200,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

const portfolio__image = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}

const project__box = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 }
    })
}

const projects_header = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const mobile__projects = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const contact__list = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

const contact__image = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2 }
    }
}

const footer__animation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: (custom: number = 1) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
}

export {
    hero__header,
    hero__programs,
    section__title,
    about__text,
    about__image,
    portfolio__line,
    portfolio__image,
    project__box,
    projects_header,
    mobile__projects,
    contact__list,
    contact__image,
    footer__animation
}