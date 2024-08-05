import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { DefaultModalWindow } from '@/shared/ui/modal/default/ui'

export default function Home() {
  return (
    <main>
      <div className="mt-5 text-center text-2xl">
        <h2>Russian Version</h2>
      </div>

      <div className="p-4">
        <div className="mb-10 mt-10 flex ">
          <DefaultModalWindow
            classNameProps="w-full mr-5"
            titleBtn="Задания"
            titleModal="Редактирование задания"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Название</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Картинка
                  </Label>
                  <Input placeholder="Картинка" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-5 mt-5 grid w-full pb-2">
                  <Label>Активация</Label>

                  <div className="mt-5 flex items-center justify-between space-x-2">
                    {' '}
                    <Label htmlFor="airplane-mode">Активировать задани</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Закрыть"
            modalNextText="Сохранить"
          />

          <DefaultModalWindow
            classNameProps="w-full ml-5"
            titleBtn="Награды"
            titleModal="Редактирование Награды"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Название</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Картинка
                  </Label>
                  <Input placeholder="Картинка" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-5 mt-5 grid w-full pb-2">
                  <Label>Активация</Label>

                  <div className="mt-5 flex items-center justify-between space-x-2">
                    {' '}
                    <Label htmlFor="airplane-mode">Активировать Награды</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Закрыть"
            modalNextText="Сохранить"
          />
        </div>
        <div className=" mb-10">
          <DefaultModalWindow
            classNameProps="w-full mr-5"
            titleBtn="Программа"
            titleModal="Редактирование программы"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Название</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Картинка
                  </Label>
                  <Input placeholder="Картинка" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-5 mt-5 grid w-full pb-2">
                  <Label>Активация</Label>

                  <div className="mt-5 flex items-center justify-between space-x-2">
                    {' '}
                    <Label htmlFor="airplane-mode">Активировать программы</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Закрыть"
            modalNextText="Сохранить"
          />
        </div>
        <div className=" mb-10">
          <DefaultModalWindow
            classNameProps="w-full mr-5"
            titleBtn="Партнеры"
            titleModal="Редактирование партнеров"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Название</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Картинка
                  </Label>
                  <Input placeholder="Картинка" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-3 mt-5 grid w-full pb-2">
                  <Label>Активация</Label>

                  <div className="mt-4 flex items-center justify-between space-x-2">
                    {' '}
                    <Label htmlFor="airplane-mode">Активировать партнеров</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Закрыть"
            modalNextText="Сохранить"
          />
        </div>
      </div>

      <div className="text-center text-2xl">
        <h2>English Version</h2>
      </div>

      <div className="mt-10 p-4">
        <div className="mb-10 mt-10 flex ">
          <DefaultModalWindow
            classNameProps="w-full mr-5"
            titleBtn="Tasks"
            titleModal="Edit Task"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Picture
                  </Label>
                  <Input placeholder="Picture" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-5 mt-5 grid w-full pb-2">
                  <Label>Activation</Label>

                  <div className="mt-5 flex items-center justify-between space-x-2">
                    <Label htmlFor="airplane-mode">Activate Task</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Close"
            modalNextText="Save"
          />

          <DefaultModalWindow
            classNameProps="w-full ml-5"
            titleBtn="Rewards"
            titleModal="Edit Reward"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Picture
                  </Label>
                  <Input placeholder="Picture" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-5 mt-5 grid w-full pb-2">
                  <Label>Activation</Label>

                  <div className="mt-5 flex items-center justify-between space-x-2">
                    <Label htmlFor="airplane-mode">Activate Reward</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Close"
            modalNextText="Save"
          />
        </div>
        <div className=" mb-10">
          <DefaultModalWindow
            classNameProps="w-full mr-5"
            titleBtn="Program"
            titleModal="Edit Program"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Picture
                  </Label>
                  <Input placeholder="Picture" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-5 mt-5 grid w-full pb-2">
                  <Label>Activation</Label>

                  <div className="mt-5 flex items-center justify-between space-x-2">
                    <Label htmlFor="airplane-mode">Activate Program</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Close"
            modalNextText="Save"
          />
        </div>
        <div className=" mb-10">
          <DefaultModalWindow
            classNameProps="w-full mr-5"
            titleBtn="Partners"
            titleModal="Edit Partner"
            modalContent={
              <div className="mt-10">
                <div className="mb-2 mt-5 grid w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" className="mt-5" />
                </div>
                <div className="grid w-full">
                  <Label htmlFor="picture" className="mb-2">
                    Picture
                  </Label>
                  <Input placeholder="Picture" className="mb-2" id="picture" type="file" />
                </div>
                <div className="mb-3 mt-5 grid w-full pb-2">
                  <Label>Activation</Label>

                  <div className="mt-4 flex items-center justify-between space-x-2">
                    <Label htmlFor="airplane-mode">Activate Partner</Label>
                    <Switch id="airplane-mode" />
                  </div>
                </div>
              </div>
            }
            modalCancelText="Close"
            modalNextText="Save"
          />
        </div>
      </div>
    </main>
  )
}
