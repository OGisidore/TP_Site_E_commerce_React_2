import { Product } from "./Products";

export interface Category {
    _id:string
    name : string 
    slug : string 
    description : string 
    isMega : Boolean 
    products : Product[]
    updated_at : Date | null
    created_at : Date | null 
}