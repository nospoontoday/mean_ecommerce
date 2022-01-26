export interface Cart {
    _id?: string,
    session_id?: string,
    product_id?: string,
    price: number,
    quantity: number,
    name: string,
    status: string
}