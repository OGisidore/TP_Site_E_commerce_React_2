export interface Product{
    _id:string,
    name : string,
    slug: string
    description: string
    stock: number
    imageUrls: Array<string>
    solde_price: number
    regular_price: number
    relatedProducts:Product[]
    created_at: Date
    updated_at: Date
}