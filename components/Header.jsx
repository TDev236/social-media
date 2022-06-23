import React from 'react'
import Image from 'next/image'
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from '@heroicons/react/solid'

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from '@heroicons/react/outline'
import HeaderIcons from './HeaderIcons'
import { useSession, signIn, signOut } from 'next-auth/react'

const Header = () => {
    const {data:session} = useSession()
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-2 md:px-5 shadow-md'>
        {/**Left */}
        <div className='flex items-center'>
            <Image 
            src="http://links.papareact.com/5me" alt=""
            width={40}
            height={40}
            layout="fixed"
            />
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <SearchIcon className='h-6 text-gray-600'/>
                <input className='hidden md:inline-flex ml-2 items-center bg-transparent flex-shrink outline-none placeholder-gray-500' type="text" placeholder='Buscar en LetBook' />
            </div>
        </div>

        {/**Center */}
        <div className='flex justify-center flex-grow md:flex'>
            <div className='flex space-x-8 md:-space-x-12 lg:space-x-6'>
                <HeaderIcons active Icon={HomeIcon}/>
                <HeaderIcons Icon={FlagIcon}/>
                <HeaderIcons Icon={PlayIcon}/>
                <HeaderIcons Icon={ShoppingCartIcon}/>
                <HeaderIcons Icon={UserGroupIcon}/>
            </div>
        </div>

        {/**Rigth */}
        <div className='flex items-center justify-end '>
            {/**Profile Picture */}
            <Image
                onClick={signOut}
                src={session.user.image}
                width="40"
                height="40"
                className='rounded-full mr-2 cursor-pointer transform hover:scale-75 duration-200 ease-in-out'
                alt='profile-picture'
            />
            {/**Users Name */}
            <p className='user_name'>{session.user.name}</p>
            <ViewGridIcon className='icon'/>
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChevronDownIcon className='icon'/>
        </div>
    </div>
  )
}

export default Header