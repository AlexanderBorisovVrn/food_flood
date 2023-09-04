import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex items-center justify-between h-12 lg:h-24 lg:text-xl p-4 text-dark border-t-2 bg-white border-dark '>
      <Link href={'/'} className='flex items-center gap-2 '>
      <img src="/logo/logo_md.png" className='h-10 lg:h-20' alt="FoodFlood" />
      FoodFlood&#174;
      </Link>
      <span>&copy; All rights reserved</span>
    </footer>
  )
}

export default Footer