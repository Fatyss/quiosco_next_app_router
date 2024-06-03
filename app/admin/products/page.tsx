import ProductTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { products } from "@/prisma/data/products";
import { prisma } from "@/src/lib/prisma";
async function getProducts() {
    const products = await prisma.product.findMany({
        include:{
            category: true 
        }
    })
    return products
}

export type ProductsWhithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage() {
    const products= await getProducts()

    return (
        <>
        <Heading>Administrar Productos</Heading>
        
        <ProductTable 
            products={products}
        />
        </>
    )
}