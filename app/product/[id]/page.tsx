import Image from "next/image";
import PriceWidget from "@/components/PriceWidget";
import prisma from "@/utils/connectPrisma";


const getProduct = async (id: string) => {
  try {
    return await prisma.product.findUnique({
      where: {
        id: id,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const  product = await getProduct(params.id);

  if (!product) return <div>NOt found</div>;
  return (
    <main className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-third md:flex-row md:gap-8 md:items-center ">
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 md:h-[70%]  w-full">
        {product?.img && (
          <Image
            src={product.img}
            alt={product.title}
            fill
            className="object-contain"
          />
        )}
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="uppercase font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl">{product?.title}</h1>
        <p className="text-lg md:text-xl xl:text-2xl 2xl:text-3xl">{product?.desc}</p>
        <PriceWidget options={product.options} price={product.price.toNumber()} />
      </div>
    </main>
  );
};

export default ProductPage;
