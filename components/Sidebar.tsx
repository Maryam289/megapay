'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = ({user}: SiderbarProps ) => {
    const pathname = usePathname()
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className="mb-12 cursor-pointer
            flex items-center gap-2">
                <Image src="/icons/logo-removebg.png"
                  width={180}
                  height={120} alt='MegaPay logo'
                  className='flex w-20 h-5 max-2xl:size-20'/>
            </Link>
            {sidebarLinks.map((item) =>
            {
                const isActive = pathname === item.route ||
                pathname.startsWith(`${item.route}/`)
                return(
                    <Link href={item.route} key={item.label}
                        className={cn('sidebar-link', {'sidebar-link-active': isActive,})}>
                            <div className="relative size-6">
                                <Image src={item.imgURL} alt={item.label}
                                    fill
                                    className= {cn('sidebar-icon', {'sidebar-icon-active': isActive,})}
                                />
                            </div>
                            <span className={cn('sidebar-label', {'sidebar-label-active': isActive,})}>
                                {item.label}
                            </span>
                            {isActive && (
                                <span className='sidebar-dot'/>
                            )}
                    </Link>
                )
            })}

        </nav>
    </section>
  )
}

export default Sidebar