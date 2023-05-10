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

export type TProjectsList = NumberID & {
    title: string
    description: string
    image: string
    unique: string
    type: string
}

export type TMobileProjects = NumberID & {
    image: string
    unique: string
}