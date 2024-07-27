import React from 'react';
import { SidebarProps } from '@/types';


const Sidebar: React.FC<SidebarProps> = ({sidebarState, setShowSidebar}) => {

  return (
    <>
    {
        sidebarState && (
            
            <div className="">
                
            </div>
        )
    }
    </>
  )
}

export default Sidebar