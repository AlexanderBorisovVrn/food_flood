'use client'
import Countdown from 'react-countdown'

const end = new Date('2023-10-06')

const CountDown = () => {
  return (
    <Countdown date={end} className='text-3xl md:text-4xl xl:text-6xl md:my-6 text-secondary font-bold'/>
  )
}

export default CountDown