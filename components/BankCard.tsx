import { formatCurrency } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'

const BankCard = ({ account, userName, showBalance=true}: CreditCardProps) =>{
  return (
    <div className='flex flex-col'>
        <Link href="/" className='bank-card'>
            <div className='bank-card-content'>
                <div>
                    <h1 className='text-[16px] font-semibold text-white'>
                        {account.name || userName}
                    </h1>
                    <p className='font-ibm-plex-serif font-black text-white'>
                        {formatCurrency(account.currentBalance)}
                    </p>
                </div>
                <article className='flex flex-col gap-2'>
                    <div className='flex justify-between'>
                        <h1 className='text-[12px] font-semibold text-white'>
                            {userName}
                        </h1>
                        <h2 className='text-[12px] font-semibold text-white'>
                            ** / **
                        </h2>
                    </div>
                    <p className='text-[14px] font-semibold tracking-[1.1px] text-white'>
                        ●●●● ●●●● ●●●● <span className='text-[16px]'>4321
                        </span>
                    </p>
                </article>
            </div>

            <div className='bank-card-icons'>
                <Image 
                    src="/icons/paypass_icon.png"
                    width={24} height={24}
                    alt="pay"/>
                
                <Image 
                    src="/icons/master_card.png"
                    width={32} height={32}
                    alt="mastercard"/>
            </div>
        </Link>
    </div>
  )
}

export default BankCard