import Image from 'next/image'

const CartPage = () => {
  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-primary'>
      {/* PRODUCT CONTAINER */}
      <section className='h-1/2 lg:h-full p-2 lg:p-4 gap-4 sm:p-4 flex lg:w-2/3 lg:justify-center flex-col  overflow-scroll bg-white'>


        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-4'>
          <div className='relative object-contain h-28 w-28 2xl:h-36 2xl:w-36'>
            <Image src='/products/pizza/p1.png' alt='' fill sizes='20vw' />
          </div>
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center text-lg md:text-xl 2xl:text-3xl'>
            <div>
              <h1 className='uppercase font-bold'>Гвантанамера</h1>
              <span className='text-secondary text-sm md:text-lg  2xl:text-xl'>Большая</span>
            </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='center  rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-sm md:text-lg 2xl:text-3xl'>&#128473;</button>
        </div>
        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-4'>
          <div className='relative object-contain h-28 w-28 2xl:h-36 2xl:w-36'>
            <Image src='/products/pizza/p1.png' alt='' fill sizes='20vw' />
          </div>
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center text-lg md:text-xl 2xl:text-3xl'>
            <div>
              <h1 className='uppercase font-bold'>Гвантанамера</h1>
              <span className='text-secondary text-sm md:text-lg  2xl:text-xl'>Большая</span>
            </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='center  rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-sm md:text-lg 2xl:text-3xl'>&#128473;</button>
        </div>

        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-4'>
          <div className='relative object-contain h-28 w-28 2xl:h-36 2xl:w-36'>
            <Image src='/products/pizza/p1.png' alt='' fill sizes='20vw' />
          </div>
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center text-lg md:text-xl 2xl:text-3xl'>
            <div>
              <h1 className='uppercase font-bold'>Гвантанамера</h1>
              <span className='text-secondary text-sm md:text-lg  2xl:text-xl'>Большая</span>
            </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='center  rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-sm md:text-lg 2xl:text-3xl'>&#128473;</button>
        </div>

        {/* SINGLE ITEM */}
        <div className='flex items-center justify-between mb-4'>
          <div className='relative object-contain h-28 w-28 2xl:h-36 2xl:w-36'>
            <Image src='/products/pizza/p1.png' alt='' fill sizes='20vw' />
          </div>
          <div className='flex flex-col  gap-1 sm:flex-row sm:justify-around sm:flex-1 sm:items-center text-lg md:text-xl 2xl:text-3xl'>
            <div>
              <h1 className='uppercase font-bold'>Гвантанамера</h1>
              <span className='text-secondary text-sm md:text-lg  2xl:text-xl'>Большая</span>
            </div>
            <h2 className='font-bold '>₽ 556</h2>
          </div>
          <button className='center  rounded-full w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 text-sm md:text-lg 2xl:text-3xl'>&#128473;</button>
        </div>


      </section>
      {/* PAYMENT CONTAINER */}
      <section className='h-1/2 lg:h-full lg:flex-1 p-4 lg:p-6 bg-gray flex flex-col gap-4 md:gap-8 lg:gap-10 justify-center text-primary md:text-xl 2xl:text-2xl'>
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
        <div className='flex justify-between text-xl xl:text-2xl 2xl:text-3xl font-bold mt-2'>
          <span className=''>Итого:</span>
          <span className=''>₽ 1888</span>
        </div>
        <button className='bg-secondary p-3 mt-2 rounded-md w-1/2 md:w-1/3 lg:w-1/2 text-white 2xl:text-3xl 2xl:p-4'>Заказать</button>
      </section>
    </main>
  )
}

export default CartPage