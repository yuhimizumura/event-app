export type signInUserModel = {
    id: string
    sei: string
    email: string
    gender: string
    age: string
    tel: string
    sns: string
    sns_name?: string
    pref: string
    profile: string
    category?: string
    image_type?: string
    createdAt?: string
    updatedAt?: string
}

export type addUserModel = {
    id: string
    sei?: string
    email?: string
    gender?: string
    age?: string
    tel1?: string
    tel2?: string
    tel3?: string
    sns?: string
    sns_name?: string
    pref?: string
    profile?: string
}