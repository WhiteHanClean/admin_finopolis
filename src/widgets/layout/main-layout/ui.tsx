'use client'

import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import 'react-toastify/dist/ReactToastify.css'
import { usePathname } from 'next/navigation'

type TProps = {
  children: ReactNode
  className?: string
}

export const MainLayout = ({ className, children }: TProps) => {
  const pathname = usePathname()

  return (
    <main
      className={
        pathname !== '/sign-in'
          ? cn(className, ' mt-32 border border-gray-200 bg-white sm:m-5 sm:mt-32 md:ml-80 md:mr-20')
          : 'mt-20 flex justify-center'
      }
    >
      {children}
    </main>
  )
}
