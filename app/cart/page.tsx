import Image from 'next/image'

const CartPage = () => {
  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-primary'>
      {/* PRODUCT CONTAINER */}
      <section className='h-1/2 p-2 sm:p-4 flex flex-col justify-center overflow-scroll bg-white'>

        {/* SINGLE ITEM */}
        <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center '>
             <div>

            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className='text-secondary'>Большая</span>
             </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='font-bold border p-1 rounded-full px-3 '>X</button>
        </div>

        {/* SINGLE ITEM */}
        <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center '>
             <div>

            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className='text-secondary'>Большая</span>
             </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='font-bold border p-1 rounded-full px-3 '>X</button>
        </div>

        {/* SINGLE ITEM */}
        <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center '>
             <div>

            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className='text-secondary'>Большая</span>
             </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='font-bold border p-1 rounded-full px-3 '>X</button>
        </div>

        {/* SINGLE ITEM */}
        <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center '>
             <div>

            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className='text-secondary'>Большая</span>
             </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='font-bold border p-1 rounded-full px-3 '>X</button>
        </div>

     


      </section>
      {/* PAYMENT CONTAINER */}
      <section className='h-1/2 p-4 bg-gray flex flex-col gap-4 justify-center text-primary'>
        <div className='flex justify-between'>
          <span className=''>Всего: (3 товара)</span>
          <span className=''>₽ 1888</span>
        </div>

        <div className='flex justify-between'>
          <span className=''>Сервисный сбор</span>
          <span className=''>₽ 0.00</span>
        </div>

        <div className='flex justify-between'>
          <span className=''>Стоимость доставки</span>
          <span className='text-green uppercase'>Бесплатно</span>
        </div>
        <hr className='' />
        <button className='bg-secondary p-3 rounded-md w-1/2 text-white'>Заказать</button>
      </section>
    </main>
  )
}

export default CartPage