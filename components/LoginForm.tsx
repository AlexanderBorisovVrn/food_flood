'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
const LoginForm = () => {
  const buttonStyle = 'w-full border border-aluminum p-2 lg:p-4 rounded-md center gap-4 font-bold text-smoke text-lg lg:text-xl xl:text-2xl  hover:bg-gray '

    return (
         <div className='p-10 flex flex-col gap-8 md:w-1/2 md:justify-center '>
            <h1 className='font-bold text-xl lg:text-3xl'>Приветствуем!!</h1>
            <p className='lg:text-lg xl:text-xl'>Войдите в свой аккаунт или создайте новый</p>

            <button className={buttonStyle} onClick={() => signIn('google')}>
                <Image src='/icons/google.png' alt='google' width={20} height={20} />
                Google
            </button>
            <button className={buttonStyle}>
                <Image src='/icons/vk.png' alt='vk' width={20} height={20} />
                VK
            </button>
            <p className='text-sm'>Возникли проблемы? <Link href='' className='underline'>Связаться с нами.</Link></p>
        </div>
    )
}

export default LoginForm