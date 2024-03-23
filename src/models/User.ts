export interface User{
    fullName:string,
    email:string,
    password?:string,
    roles?:Array<string>
}