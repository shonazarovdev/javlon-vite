type NumberID = {
    id: number
}

export type TMenuList = NumberID & {
    name: string
    title: string
}

export type TSocialList = NumberID & {
    name: string
    title: string
    icon: string
    link: string
}