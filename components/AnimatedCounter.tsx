'use client';
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: { amount: number }) => {
  return (
    <div>
      <CountUp className='w-full'
    //   duration={2}
      decimals={3}
      decimal=','
      prefix='RUB '
      end={amount}/>
    </div>
  )
}

export default AnimatedCounter
