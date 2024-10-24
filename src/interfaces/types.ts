export interface Product {
    product_name: string
    quantity: number
    image_url: string
    description: string
    branch_name: string
    location: string
    latitute: number
    longitute: number
}

export interface ProductOption {
    quantity: number
    product_name: string
    branch_name: string
    product_id: number
    branch_id: number
}

export interface BranchOption {
    id: number
    name: string
    location: string
    latitude: number
    longitude: number
}