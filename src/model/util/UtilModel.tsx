export type prefListModel = {
    pref:prefModel[]
}

export type ageListModel = {
    age:ageModel[]
}

export type categoryListModel = categoryModel[]

export type prefModel = {
    code:number,
    name:string
}

export type ageModel = {
    code:number,
    name:string
}

export type categoryModel = {
    key:string,
    name:string,
    icon:string
}
