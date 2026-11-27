'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/menu.png" alt="menu"
                        width={30} height={30} className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side="left" className="border-none bg-white">
                    <Link href="/" className="flex cursor-pointer
                                 items-center gap-1 px-4">
                        <Image src="/icons/logo-removebg.png"
                            width={80}
                            height={20} alt='MegaPay logo'
                            className='flex w-5 h-20 max-2xl:size-20'/>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-full flex-col gap-3
                            text-gray-600">
                                {sidebarLinks.map((item) => {
                                    const isActive = pathname === item.route ||
                                        pathname.startsWith(`${item.route}/`)
                                    return (
                                        <SheetClose asChild key={item.route}>
                                            <Link href={item.route} key={item.label}
                                                className={cn('mobilenav-sheet_close w-full', { 'sidebar-link-active': isActive, })}>
                                                    <Image src={item.imgURL} alt={item.label}
                                                        width={20} height={20}
                                                        className={cn('sidebar-icon', { 'sidebar-icon-active': isActive, })}
                                                    />
                                                <span className={cn('text-[16px] font-semibold text-gray-600', { 'sidebar-label-active': isActive})}>
                                                    {item.label}
                                                </span>
                                                {isActive && (
                                                    <span className='sidebar-dot' />
                                                )}
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                                USER
                            </nav>
                        </SheetClose>
                        FOOTER
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNav