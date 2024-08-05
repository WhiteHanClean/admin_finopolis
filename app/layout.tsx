'use client'
import { Header } from '@/widgets/layout/header'
import './globals.css'
import { AsideBare } from '@/widgets/layout/asideBare'
import { MainLayout } from '@/widgets/layout/main-layout/ui'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isLogoutPage = pathname === '/sign-in'
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {!isLogoutPage && <Header />}
        {!isLogoutPage && <AsideBare />}
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
