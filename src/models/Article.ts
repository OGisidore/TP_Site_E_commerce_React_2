import { Product } from "./Products";

export interface Article {
    product : Product,
    quantity : number,
    sub_total : number
}