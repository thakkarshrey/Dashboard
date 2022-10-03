import React from 'react'

import { Link,NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import {links} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  console.log(links)
  const {activeMenu,setActiveMenu,screenSize} = useStateContext()
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  const handleSidebarClose =()=>{
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto pb-10'>
      {activeMenu && 
      <>
      <div className='flex items-center justify-between'>
        <Link to='/' className='flex items-center mt-4 gap-3 ml-3 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white' onClick={handleSidebarClose}>
          <SiShopware/> <span>Shoppy</span>
        </Link>
        <TooltipComponent content="Menu" position="BottomCenter">
          <button type='button' onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)} className='text-xl mt-4 rounded-full p-3 hover:bg-light-gray block md:hidden'>
            <MdOutlineCancel/>
          </button>
        </TooltipComponent>
      </div>
      <div className='mt-10'>
      {links.map((item)=>(
        <div key={item.title}>
          <p className='mt-4 m-3 uppercase text-gray-400'>
            {item.title}
          </p>
          {item.links.map((link)=>(
            <NavLink to={`/${link.name}`} onClick={handleSidebarClose} key={link.name} className={({isActive})=>isActive?activeLink:normalLink}>
                {link.icon}
                <span className='capitalize'>{link.name}</span>
            </NavLink>
          ))}
        </div>
      ))}
      </div>
      </>}
    </div>
  )
}

export default Sidebar