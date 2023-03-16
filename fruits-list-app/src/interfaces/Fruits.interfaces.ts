export interface IFruit {
    id: number
    description: string
    valueOne: number
    valueTwo: number
}

export interface ISelectedFruit {
    id?: number
    description?: string
    valueOne?: number
    valueTwo?: number
}

export interface IFruitProps {
    description?: string
    valueOne?: number
    valueTwo?: number
}

export interface IFruitPropsSelection {
    description?: string
    valueOne?: number
    valueTwo?: number
    setIsSelected: Function
    setSelectedFruit: Function
}
