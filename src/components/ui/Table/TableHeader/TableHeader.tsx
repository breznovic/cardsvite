import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import ArrowDownIcon from '@/assets/images/Select/ArrowDownIcon'
import { Button } from '@/components/ui/Button'
import { Table } from '@/components/ui/Table'
import { Typography } from '@/components/ui/Typography'

import s from './TableHeader.module.scss'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

type Props = Omit<
  ComponentPropsWithoutRef<typeof Table.Head> & {
    columns: Column[]
  },
  'children'
>

export const TableHeader = forwardRef<ElementRef<typeof Table.Head>, Props>(
  ({ columns, ...restProps }, ref) => {
    return (
      <Table.Head ref={ref} {...restProps}>
        <Table.Row>
          {columns.map(({ key, sortable, title }) => {
            return (
              <Table.HeadCell className={s.activeHeadCell} key={key}>
                <Typography as={'span'} className={s.sortCell} variant={'subtitle2'}>
                  {title}
                  {sortable && (
                    <Button className={s.sortIconButton}>
                      <ArrowDownIcon
                        className={s.sortIcon}
                        color={'var(--color-light-100)'}
                        height={'14'}
                        width={'14'}
                      />
                    </Button>
                  )}
                </Typography>
              </Table.HeadCell>
            )
          })}
        </Table.Row>
      </Table.Head>
    )
  }
)
