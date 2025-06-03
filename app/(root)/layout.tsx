import React from 'react'
import SidebarWrapper from '@/components/ui/shared/sidebar/SidebarWrapper'

type Props = React.PropsWithChildren<{name: string}>

function Layout({ children }: Props) {
    return (
    <SidebarWrapper>
            {children}
      </SidebarWrapper>
  )
}

export default Layout   