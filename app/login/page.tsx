'use client'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LoginForm from '@/components/LoginForm';
import { useSession } from 'next-auth/react';


const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();


  if (status === 'loading') {
    return <p>Loading...</p>
  }
  if (status === 'authenticated') {
    router.push('/')
  }


  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] center bg-white'>
      {/* BOX */}
      <div className='h-full   md:h-1/2 lg:h-3/4  w-full md:w-4/5 lg:w-3/4 xl:w-2/3 shadow-2xl rounded-md flex flex-col md:flex-row'>
        {/* IMAGE CONTAINER */}
        <div className='relative h-1/3 md:h-full w-full md:w-1/2'>
          <Image src='/login/login.jpg' alt='login' fill sizes='(min-width: 600px) 33vw' className='object-cover' />
        </div>

        <LoginForm />

      </div>
    </main>
  )
}

export default LoginPage