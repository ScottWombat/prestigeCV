export interface PersonalInfo {
    profileImage?: string
    firstName?: string
    lastName?: string
    address?: string
    email?: string
    telephone?: string
    professional_summary?: string
    facebook?: string
    linkin?: string
    instagram?: string

}

export interface Education {
    startYear: string
    endYear: string
    instution: string
    degree: string
}
export interface Experience{
    startYear: string
    endYear: string
    position: string
    work: string
}