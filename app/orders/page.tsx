import React from 'react'

const OrdersPage = () => {
  const visibilityStyle = 'hidden md:block '
 
  return (
    < main className='p-4 lg:px-20 xl:px-40 bg-white'>
      <table className='w-full border-separate border-spacing-2'>
        <thead className='text-left'>
          <tr>
            <th className={visibilityStyle}>№ Заказа</th>
            <th>Дата</th>
            <th>Цена</th>
            <th className={visibilityStyle}>Товары</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {/* SINGLE ORDER */}
          <tr className='text-sm  md:text-base first:bg-light'>
            <td className={visibilityStyle + 'py-6 px-1' }>5243515asdfasd</td>
            <td  className='py-6 px-1'>23.10.2023</td>
            <td className='py-6 px-1'>560</td>
            <td className={visibilityStyle + 'py-6 px-1'}>Гвантанамера (2), Кола (1), Бургер (2)</td>
            <td className='py-6 px-1'>В пути (&#8776; 5мин.)</td>
          </tr>

           {/* SINGLE ORDER */}
           <tr className='text-sm  md:text-base odd:bg-gray'>
            <td className={visibilityStyle + 'py-6 px-1' }>5243515asdfasd</td>
            <td  className='py-6 px-1'>23.10.2023</td>
            <td className='py-6 px-1'>560</td>
            <td className={visibilityStyle + 'py-6 px-1'}>Гвантанамера (2), Кола (1), Бургер (2)</td>
            <td className='py-6 px-1'>В пути (&#8776; 5мин.)</td>
          </tr>

           {/* SINGLE ORDER */}
           <tr className='text-sm  md:text-base odd:bg-gray'>
            <td className={visibilityStyle + 'py-6 px-1' }>5243515asdfasd</td>
            <td  className='py-6 px-1'>23.10.2023</td>
            <td className='py-6 px-1'>560</td>
            <td className={visibilityStyle + 'py-6 px-1'}>Гвантанамера (2), Кола (1), Бургер (2)</td>
            <td className='py-6 px-1'>В пути (&#8776; 5мин.)</td>
          </tr>

           {/* SINGLE ORDER */}
           <tr className='text-sm  md:text-base odd:bg-gray'>
            <td className={visibilityStyle + 'py-6 px-1' }>5243515asdfasd</td>
            <td  className='py-6 px-1'>23.10.2023</td>
            <td className='py-6 px-1'>560</td>
            <td className={visibilityStyle + 'py-6 px-1'}>Гвантанамера (2), Кола (1), Бургер (2)</td>
            <td className='py-6 px-1'>В пути (&#8776; 5мин.)</td>
          </tr>

           {/* SINGLE ORDER */}
           <tr className='text-sm  md:text-base odd:bg-gray'>
            <td className={visibilityStyle + 'py-6 px-1' }>5243515asdfasd</td>
            <td  className='py-6 px-1'>23.10.2023</td>
            <td className='py-6 px-1'>560</td>
            <td className={visibilityStyle + 'py-6 px-1'}>Гвантанамера (2), Кола (1), Бургер (2)</td>
            <td className='py-6 px-1'>В пути (&#8776; 5мин.)</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default OrdersPage