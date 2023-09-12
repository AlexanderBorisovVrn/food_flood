import Image from 'next/image'


const LoginPage = () => {
  return (
    <main className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] center'>
      {/* BOX */}
      <div className='h-full w-full shadow-2xl rounded-md flex flex-col md:flex-row'>
        {/* IMAGE CONTAINER */} 
        <div className='relative h-1/3 w-full'>
          <Image src='/login/login.jpg' alt='login' fill sizes='(min-width: 600px) 33vw' className='object-cover'/>
        </div>
        
        {/* FORM CONTAINER */}
        <div className='p-10 flex flex-col gap-8'>
          <h1 className='font-bold '>Приветствуем!!</h1>
          <p>Войдите в свой аккаунт или создайте новый</p>
        </div>
      </div>
    </main>
  )
}

export default LoginPage