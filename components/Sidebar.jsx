import React from 'react'
import { useSession } from 'next-auth/react'
//Icons
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon
} from '@heroicons/react/outline'

import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UserIcon
} from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
  const { data: session, loading } = useSession()

  return (
    <div className='p-2 mt-5 max-w-[400px] xl:min-w-[300px]'>
      <SidebarRow src={session.user.image} title={session.user.name}/>
      <SidebarRow Icon={UserIcon} title="friends"/>
      <SidebarRow Icon={UserGroupIcon} title="Groups"/>
      <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Videos"/>
      <SidebarRow Icon={CalendarIcon} title="Eventos"/>
      <SidebarRow Icon={ClockIcon} title="Recuerdos"/>
      <SidebarRow Icon={ChevronDownIcon} title="Mas Info"/>
    </div>
  )
}

export default Sidebar