import { DeleteIcon } from '@/assets/images/Table/DeleteIcon'
import { EditIcon } from '@/assets/images/Table/EditIcon'
import { PlayIcon } from '@/assets/images/Table/PlayIcon'
import { Button } from '@/components/ui/Button'
import { Typography } from '@/components/ui/Typography'
import { Rating } from '@it-incubator/ui-kit'
import { Meta } from '@storybook/react'

import s from './Table.module.scss'

import { Table } from './Table'
import { Column, TableHeader } from './TableHeader'

const meta: Meta<typeof Table.Root> = {
  component: Table.Root,
  tags: ['autodocs'],
  title: 'Components/Table',
}

export default meta

const columnsDefault: Column[] = [
  {
    key: 'technology',
    title: 'Technology',
  },
  {
    key: 'description',
    title: 'Description',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Updated',
  },
  {
    key: 'rating',
    title: 'Rating',
  },
  {
    key: 'icons',
    title: '',
  },
]

const dataDefault = [
  {
    description: 'Native',
    rating: 5,
    title: 'JavaScript Native',
    updated: '2024-01-07',
  },
  {
    description: 'State Manager',
    rating: 4,
    title: 'Redux',
    updated: '2024-02-07',
  },
  {
    description: 'State Manager',
    rating: 3,
    title: 'Redux Toolkit',
    updated: '2024-01-07',
  },
  {
    description: 'Styles',
    rating: 5,
    title: 'CSS',
    updated: '2024-01-07',
  },
]

export const Default = () => {
  return (
    <Table.Root>
      <TableHeader columns={columnsDefault} />
      <Table.Body>
        {dataDefault.map(item => (
          <Table.Row key={item.title}>
            <Table.Cell>
              <Typography variant={'body2'}>{item.title}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.description}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>{item.updated}</Typography>
            </Table.Cell>
            <Table.Cell>
              <Typography variant={'body2'}>
                <Rating className={s.rating} readonly value={item.rating} />
              </Typography>
            </Table.Cell>
            <Table.Cell>
              <Button className={s.tableButton}>
                <PlayIcon color={'white'} height={'16'} width={'16'} />
              </Button>
              <Button className={s.tableButton}>
                <EditIcon color={'white'} height={'16'} width={'16'} />
              </Button>
              <Button className={s.tableButton}>
                <DeleteIcon color={'white'} height={'16'} width={'16'} />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export const Empty = () => {
  return (
    <div className={s.emptyTable}>
      <Table.Empty />
      <Button variant={'primary'}>Add New Card</Button>
    </div>
  )
}
