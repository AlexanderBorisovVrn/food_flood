import Image from 'next/image'

const CartPage = () => {
  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-secondary'>
      {/* PRODUCT CONTAINER */}
      <section className='h-1/2 p-4 flex flex-col justify-center overflow-scroll bg-white'>
        {/* SINGLE ITEM */}
        <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className=''>Large</span>
          </div>
          <h2 className='font-bold'>₽ 556</h2>
          <button className='font-bold'>X</button>
        </div> 

            {/* SINGLE ITEM */}
            <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className=''>Large</span>
          </div>
          <h2 className='font-bold'>₽ 556</h2>
          <button className='font-bold'>X</button>
        </div> 

            {/* SINGLE ITEM */}
            <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className=''>Large</span>
          </div>
          <h2 className='font-bold'>₽ 556</h2>
          <button className='font-bold'>X</button>
        </div> 

            {/* SINGLE ITEM */}
            <div className='object-contain relative flex items-center justify-between mb-4'>
          <Image src='/products/pizza/p1.png' alt='' width={100} height={100} />
          <div className=''>
            <h1 className='text-xl uppercase font-bold'>Гвантанамера</h1>
            <span className=''>Large</span>
          </div>
          <h2 className='font-bold'>₽ 556</h2>
          <button className='font-bold'>X</button>
        </div> 
        
      </section>
      {/* PAYMENT CONTAINER */}
      <section className='h-1/2 p-4'>
        <div>
          <span className=''>Итого: (3 позиции)</span>
          <span className=''>₽ 1888</span>
        </div>
        <hr className='' />
        <button className='bg-secondary text-white p-3 rounded-md w-1/2'>Заказать</button>
      </section>
    </main>
  )
}

export default CartPage