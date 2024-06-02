import ProductCard from "@/components/products/ProductsCard";
import { prisma } from "@/src/lib/prisma";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category:{
        slug:category
      }
    }
  })
  return products
}

export default async function Orderpage({params}: {params:{category: string}}) {
  const products = await getProducts(params.category)
  //console.log(products)
    return (
      <>
      <h1 className="text-2xl my-10">Elige y personaliza tu pedido a continuacion</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grap-4 items-start">
        {products.map(product =>(
          <ProductCard 
          key={product.id}
          product={product}
          />
        ))}
      </div>
      </>
    );
  }