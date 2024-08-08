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

export type Question = {
  id: string
  question: string
  answer: string
}

const dataQuestions: Question[] = [
  {
    id: '1',
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: '2',
    question: 'What is a hook in React?',
    answer: 'A Hook is a special function that lets you “hook into” React features.',
  },
  {
    id: '3',
    question: 'What is state in React?',
    answer: 'State is a built-in object that stores property values that belong to the component.',
  },
]

const columnLabels: Record<string, string> = {
  id: 'ID',
  question: 'Вопрос',
  answer: 'Ответ',
  actions: 'Действия',
}

const Cell = ({ row }) => {
  const question = row.original
  const [isDeleteDrawerOpen, setIsDeleteDrawerOpen] = React.useState(false)
  const [isAnswerDrawerOpen, setIsAnswerDrawerOpen] = React.useState(false)
  const [answer, setAnswer] = React.useState(question.answer)

  const handleDelete = () => {
    // console.log(`Deleting question with ID: ${question.id}`)
    setIsDeleteDrawerOpen(false)
  }

  const handleSaveAnswer = () => {
    // console.log(`Saving answer for question with ID: ${question.id}, Answer: ${answer}`)
    setIsAnswerDrawerOpen(false)
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
          <DropdownMenuItem onClick={() => setIsAnswerDrawerOpen(true)}>Ответить</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsDeleteDrawerOpen(true)}>Удалить</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Drawer open={isDeleteDrawerOpen} onOpenChange={setIsDeleteDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Подтверждение удаления</DrawerTitle>
            <DrawerDescription>Вы уверены, что хотите удалить этот вопрос?</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button onClick={handleDelete}>Да</Button>
            <DrawerClose asChild>
              <Button variant="outline">Нет</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Drawer open={isAnswerDrawerOpen} onOpenChange={setIsAnswerDrawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Ответ на вопрос</DrawerTitle>
            <DrawerDescription>{question.question}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <Input
              placeholder="Введите ответ"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full"
            />
          </div>
          <DrawerFooter>
            <Button onClick={handleSaveAnswer}>Сохранить изменения</Button>
            <DrawerClose asChild>
              <Button variant="outline">Отменить изменения</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

const columns: ColumnDef<Question>[] = [
  {
    accessorKey: 'id',
    header: columnLabels['id'],
  },
  {
    accessorKey: 'question',
    header: columnLabels['question'],
  },
  {
    accessorKey: 'answer',
    header: columnLabels['answer'],
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: Cell,
  },
]

export default function QuestionsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: dataQuestions,
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
          placeholder="поиск по вопросу или его ID"
          value={(table.getColumn('question')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('question')?.setFilterValue(event.target.value)}
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
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {columnLabels[column.id] || column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table className="min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() ? 'selected' : undefined}>
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
