import { TMenuList, TMobileProjects, TProjectsList, TSocialList } from "./types"

export const menuList: TMenuList[] = [
    {
        id: 1,
        name: 'home',
        title: 'Home'
    },
    {
        id: 2,
        name: 'about',
        title: 'About me'
    },
    {
        id: 3,
        name: 'portfolio',
        title: 'Portfolio'
    },
    {
        id: 4,
        name: 'contacts',
        title: 'Contacts'
    }
]

export const socialList: TSocialList[] = [
    {
        id: 1,
        name: 'instagram',
        title: 'Instagram',
        icon: 'InstagramSvg',
        link: ''
    },
    {
        id: 2,
        name: 'telegram',
        title: 'Telegram',
        icon: 'TelegramSvg',
        link: ''
    },
    {
        id: 3,
        name: 'facebook',
        title: 'Facebook',
        icon: 'FacebookSvg',
        link: ''
    },
]

export const projects__list: TProjectsList[] = [
    {
        id: 1,
        title: 'ZUV EXPRESS',
        description: 'mobile app catalog site',
        image: '/images/projects/pro_1.png',
        unique: 'pro_1',
        type: 'web'
    },
    {
        id: 2,
        title: 'datashop.uz',
        description: 'e-commerce website design',
        image: '/images/projects/pro_2.png',
        unique: 'pro_2',
        type: 'web'
    },
    {
        id: 3,
        title: 'ZUV EXPRESS',
        description: 'mobile view',
        image: '/images/projects/pro_3.png',
        unique: 'pro_3',
        type: 'mob'
    },
    {
        id: 4,
        title: 'Toshkent Shifo',
        description: 'clinic CRM system',
        image: '/images/projects/pro_4.png',
        unique: 'pro_4',
        type: 'web'
    },
    {
        id: 5,
        title: 'datashop.uz',
        description: 'mobile view',
        image: '/images/projects/pro_5.png',
        unique: 'pro_5',
        type: 'mob'
    },
    {
        id: 6,
        title: 'Unitor',
        description: 'gym CRM system',
        image: '/images/projects/pro_6.png',
        unique: 'pro_6',
        type: 'web'
    },
    {
        id: 7,
        title: 'Muhannad Sinov Servis',
        description: 'website design',
        image: '/images/projects/pro_7.png',
        unique: 'pro_7',
        type: 'web'
    },
    {
        id: 8,
        title: 'Finlite Test',
        description: 'test system design',
        image: '/images/projects/pro_8.png',
        unique: 'pro_8',
        type: 'web'
    },
    {
        id: 9,
        title: 'BuyIn',
        description: 'e-commerce website design',
        image: '/images/projects/pro_9.png',
        unique: 'pro_9',
        type: 'web'
    },
]

export const mobile__projects: TMobileProjects[] = [
    {
        id: 1,
        image: '/images/projects/mob_1.png',
        unique: 'mob_1'
    },
    {
        id: 2,
        image: '/images/projects/mob_2.png',
        unique: 'mob_2'
    }
]