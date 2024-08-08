'use client'

import Link from 'next/link'
import React from 'react'
import { paths } from '@/shared/config/paths'

export const AsideBare = () => {

  const routes = [
    { name: 'Home', path: paths.home },
    { name: 'Программы / Мероприятия', path: paths.events },
    { name: 'FAQ форум', path: paths.faqForum },
    { name: 'FAQ моб приложения', path: paths.faqMobForum },
    { name: 'Пользователи админ части', path: paths.adminUsers },
    { name: 'Участники + мануальное начисление баллов за игромеханику', path: paths.users },
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
