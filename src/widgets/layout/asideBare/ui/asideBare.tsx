'use client'

import { paths } from '@/shared/config/paths'
import Link from 'next/link'
import React from 'react'

export const AsideBare = () => {
  const userEmail = 'user@example.com'

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
    <aside
      id="logo-sidebar"
      className="sm:translate-x- fixed left-0  top-0 z-40 ml-10 mt-32 hidden h-screen w-64 border border-gray-200 bg-white pt-5 transition-transform md:block"
    >
      <div className="h-full overflow-y-auto bg-white px-3 pb-4">
        <ul className="space-y-2 font-medium">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100"
              >
                <span className="ms-3">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
