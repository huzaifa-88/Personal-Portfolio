

'use client'
import { useState } from 'react'
import {userInfo, headerItems} from '@/constants/constant'
import { NavItems } from '@/models/Header'
import {BiMenu} from 'react-icons/bi'
import {Link as ScrollLink} from 'react-scroll'

const Header: React.FC = () => {
    // variables---------------------------------
    const [navItem, showNavItems] = useState<boolean>(false);
    // variables---------------------------------

    return (
        <header className='bg-white p-6 md:flex w-full justify-between fixed top-0 z-10'>
            <div className='flex justify-between'>
                <h2 className='text-3xl font-bold'>{userInfo.name}</h2>
                <BiMenu
                    size = {30}
                    className='text-2xl cursor-pointer md:hidden'
                    onClick = {() => showNavItems(prevState => !prevState)}
                />
            </div>
            <div className={`mr-6 md:space-x-8 md:mt-4 md:block ${navItem ? 'block' : 'hidden'}`}>
                {
                    Object.keys(headerItems).map(item => (
                        <ScrollLink 
                            to = {headerItems[item as keyof NavItems].page}
                            key = {headerItems[item as keyof NavItems].label}
                            className='block md:inline-block mt-3 md:mt-0 cursor-pointer'
                            spy = {true}
                            smooth = {true}
                        >
                            {headerItems[item as keyof NavItems].label} 
                        </ScrollLink>
                    ))
                }
            </div>
        </header>
    )
}

export default Header;