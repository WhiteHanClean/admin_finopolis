'use client'

import { ChevronDownIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const dataUsers: User[] = [
  {
    id: '1',
    fullName: 'Иван Иванов',
    role: 'Админ',
    email: 'ivanov@example.com',
    phone: '+79261234567',
    company: 'Рунита',
  },
  {
    id: '2',
    fullName: 'Петр Петров',
    role: 'Модератор',
    email: 'petrov@example.com',
    phone: '+79261234568',
    company: 'ЦБ',
  },
  {
    id: '3',
    fullName: 'Сергей Сергеев',
    role: 'Пользователь',
    email: 'sergeev@example.com',
    phone: '+79261234569',
    company: 'Максимайз',
  },
]

export type User = {
  id: string
  fullName: string
  role: string
  email: string
  phone: string
  company: string
}

const columnLabels: Record<string, string> = {
  id: 'ID',
  fullName: 'ФИО',
  role: 'Роль',
  email: 'Почта',
  phone: 'Номер',
  company: 'Компания',
  actions: 'Действия',
}

const Cell = ({ row }) => {
  const user = row.original
  const [isDeleteDrawerOpen, setIsDeleteDrawerOpen] = React.useState(false)
  const [isEditDrawerOpen, setIsEditDrawerOpen] = React.useState(false)
  const [editedUser, setEditedUser] = React.useState(user)

  const handleDelete = () => {
    // Add logic to delete user
    // console.log(`Deleting user with ID: ${user.id}`)
    setIsDeleteDrawerOpen(false)
  }

  const handleSaveEdit = () => {
    // Add logic to save edited user
    // console.log(`Saving changes for user with ID: ${user.id}`, editedUser)
    setIsEditDrawerOpen(false)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <DotsHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{columnLabels['actions']}</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setIsEditDrawerOpen(true)}>Редактировать</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDeleteDrawerOpen(true)}>Удалить</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Drawer open={isDeleteDrawerOpen} onOpenChange={setIsDeleteDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Подтверждение удаления</DrawerTitle>
            <DrawerDescription>Вы уверены, что хотите удалить этого пользователя?</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={handleDelete}>Да</Button>
            <DrawerClose asChild>
              <Button variant="outline">Нет</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={isEditDrawerOpen} onOpenChange={setIsEditDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Редактировать пользователя</DrawerTitle>
            <DrawerDescription>{user.fullName}</DrawerDescription>
          </DrawerHeader>
          <div className="space-y-4 p-4">
            <Input
              placeholder="ФИО"
              value={editedUser.fullName}
              onChange={(e) => setEditedUser({ ...editedUser, fullName: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Роль"
              value={editedUser.role}
              onChange={(e) => setEditedUser({ ...editedUser, role: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Почта"
              value={editedUser.email}
              onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Номер"
              value={editedUser.phone}
              onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Компания"
              value={editedUser.company}
              onChange={(e) => setEditedUser({ ...editedUser, company: e.target.value })}
              className="w-full"
            />
          </div>
          <DrawerFooter>
            <Button onClick={handleSaveEdit}>Сохранить изменения</Button>
            <DrawerClose asChild>
              <Button variant="outline">Отменить изменения</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: columnLabels['id'],
  },
  {
    accessorKey: 'fullName',
    header: columnLabels['fullName'],
  },
  {
    accessorKey: 'role',
    header: columnLabels['role'],
  },
  {
    accessorKey: 'email',
    header: columnLabels['email'],
  },
  {
    accessorKey: 'phone',
    header: columnLabels['phone'],
  },
  {
    accessorKey: 'company',
    header: columnLabels['company'],
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: Cell,
  },
]

export default function UsersTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: dataUsers,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full p-5">
      <div className="flex items-center py-4">
        <Input
          placeholder="поиск по ФИО или ID"
          value={(table.getColumn('fullName')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('fullName')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {columnLabels[column.id] || column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table className="min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
