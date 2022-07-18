
export interface accordionData {
    parentName: string,
    isActive?: boolean,
    childs: Child[]
}

export interface Child {
    value: string
}