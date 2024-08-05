import React, { ReactNode } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

interface DefaultModalWindowProps {
  titleBtn?: string
  classNameProps?: string
  titleModal?: string
  modalContent?: ReactNode
  modalDescription?: string
  modalCancelText?: string
  modalNextText?: string
}

export const DefaultModalWindow: React.FC<DefaultModalWindowProps> = ({
  titleBtn,
  classNameProps,
  titleModal,
  modalContent,
  modalDescription,
  modalCancelText,
  modalNextText,
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className={classNameProps}>
          {titleBtn}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{titleModal}</AlertDialogTitle>
          {modalDescription && <AlertDialogDescription>{modalDescription}</AlertDialogDescription>}
          {modalContent}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{modalCancelText}</AlertDialogCancel>
          <AlertDialogAction>{modalNextText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
