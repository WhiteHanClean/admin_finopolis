'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { paths } from '@/shared/config/paths'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
  const userEmail = 'user@example.com'
  const [openSheet, setOpenSheet] = useState(false)

  const routes = [
    { name: 'Home', path: paths.home },
    { name: 'Активировать пользователя', path: paths.authActivateUser },
    { name: 'Восстановить пароль', path: paths.authRecoverPassword },
    { name: 'Блоги', path: paths.blogs },
    { name: 'Тур детально', path: paths.tourDetail('example-slug') },
    { name: 'Профиль', path: paths.profile(userEmail) },
    { name: 'Уведомления', path: paths.profileNotifications(userEmail) },
    { name: 'История', path: paths.profileHistory(userEmail) },
    { name: 'Избранное', path: paths.profileFavorites(userEmail) },
    { name: 'Настройки', path: paths.profileSettings(userEmail) },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b	 border-gray-200 bg-slate-50 p-5 pb-2">
      <nav>
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                <SheetTrigger className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 md:hidden ">
                  {' '}
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </SheetTrigger>
                <SheetContent side="left" className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle className="text-center text-2xl">Navigation для мобилки</SheetTitle>
                    <SheetDescription>
                      <div className="h-full bg-white px-3 pb-4">
                        <ul className="space-y-2 pt-4 text-base font-bold">
                          {routes.map((route) => (
                            <li key={route.path} onClick={() => setOpenSheet(false)}>
                              <Link
                                href={route.path}
                                className="group mt-2 flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
                              >
                                <span className="ms-3">{route.name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <span className="dark:--secondary-black ms-2 flex self-center whitespace-nowrap text-xl font-semibold sm:text-2xl md:me-24">
                Finopolis Admin Panel
              </span>
            </div>
            <div className="flex items-center">
              <div className="ms-3 flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                      <Image
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        width={36}
                        height={36}
                        alt="Avatar"
                        className="overflow-hidden rounded-full"
                      />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuItem>Support</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <Link href="/sign-in">
                      <DropdownMenuItem>Logout</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
