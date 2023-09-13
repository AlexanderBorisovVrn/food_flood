import Image from 'next/image'
import Link from 'next/link'


const LoginPage = () => {
  const buttonStyle = 'w-full border border-aluminum p-2 lg:p-4 rounded-md center gap-4 font-bold text-smoke text-lg lg:text-xl xl:text-2xl  hover:bg-gray '
  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] center bg-white'>
      {/* BOX */}
      <div className='h-full   md:h-1/2 lg:h-3/4  w-full md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-2xl rounded-md flex flex-col md:flex-row'>
        {/* IMAGE CONTAINER */}
        <div className='relative h-1/3 md:h-full w-full md:w-1/2'>
          <Image src='/login/login.jpg' alt='login' fill sizes='(min-width: 600px) 33vw' className='object-cover' />
        </div>

        {/* FORM CONTAINER */}
        <div className='p-10 flex flex-col gap-8 md:w-1/2 md:justify-center '>
          <h1 className='font-bold text-xl lg:text-3xl'>Приветствуем!!</h1>
          <p className='lg:text-lg xl:text-xl'>Войдите в свой аккаунт или создайте новый</p>

          <button className={buttonStyle}>
            <Image src='/icons/google.png' alt='google' width={20} height={20} />
            Google
          </button>
          <button className={buttonStyle}>
            <Image src='/icons/vk.png' alt='vk' width={20} height={20} />
            VK
          </button>
          <p className='text-sm'>Возникли проблемы? <Link href='' className='underline'>Связаться с нами.</Link></p>
        </div>
      </div>
    </main>
  )
}

export default LoginPage