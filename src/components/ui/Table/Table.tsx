import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Typography } from '@/components/ui/Typography'

import s from './Table.module.scss'

const Root = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...restProps }, ref) => {
    return <table className={s.table} ref={ref} {...restProps} />
  }
)

const Head = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...restProps }, ref) => {
    return <thead className={s.tableHead} ref={ref} {...restProps} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...restProps }, ref) => {
    return <tbody className={s.tableBody} ref={ref} {...restProps} />
  }
)

const Row = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...restProps }, ref) => {
    return <tr className={className} ref={ref} {...restProps} />
  }
)

const HeadCell = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...restProps }, ref) => {
    return <th className={s.tableHeadItem} ref={ref} {...restProps} />
  }
)

const Cell = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...restProps }, ref) => {
    return <td className={s.tableBodyItem} ref={ref} {...restProps} />
  }
)

type EmptyProps = {
  children?: ReactNode
  className?: string
  text?: string
} & ComponentPropsWithoutRef<'div'>

const Empty = forwardRef<ElementRef<'div'>, EmptyProps>(
  (
    {
      children,
      className,
      text = 'This pack is empty. Click add new card to fill this pack',
      ...restProps
    },
    ref
  ) => {
    return (
      <div className={className} ref={ref} {...restProps}>
        <Typography variant={'body1'}>{text}</Typography>
        {children}
      </div>
    )
  }
)

export const Table = { Body, Cell, Empty, Head, HeadCell, Root, Row }
