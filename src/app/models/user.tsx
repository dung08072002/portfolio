export interface IUser {
    id?: number,
    email: string,
    password: string,
    username?: string,
    role?: number,
    position?: string,
    introduce?: string,
    avatar?: string,
}