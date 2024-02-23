import { useEffect } from 'react'
import s from './Pagination.module.scss'
import { OptionType, Select } from '../Select/select'
import { Typography } from '../Typography/Typography'

export type Props = {
  className?: string
  getPage: (pageNumber: number, pageSize: number) => void
  limit: number
  page: number
  options?: OptionType[]
  setLimit: (itemsPerPage: number) => void
  setPage: (currentPage: number) => void
  totalPages: number
}

const hahdlePageChange = (
  value: number | string,
  page: number,
  setPage: (page: number) => void,
  totalPage: number
) => {
  if (value === '&laquo;' || value === '... ') {
    setPage(1)
  } else if (value === '&lsaquo;') {
    if (page !== 1) {
      setPage(page - 1)
    }
  } else if (value === '&rsaquo;') {
    if (page !== totalPage) {
      setPage(page + 1)
    }
  } else if (value === '&raquo;' || value === ' ...') {
    setPage(totalPage)
  } else {
    if (typeof value === 'number') {
      setPage(value)
    }
  }
}

const returnPaginationRange = (totalPage: number, page: number, siblings: number) => {
  const totalPageNoInArray = 7 + siblings

  if (totalPageNoInArray >= totalPage) {
    return range(1, totalPage + 1)
  }

  const leftSiblingsIndex = Math.max(page - siblings, 1)
  const rightSiblingsIndex = Math.min(page + siblings, totalPage)

  const showLeftDots = leftSiblingsIndex > 2
  const showRightDots = rightSiblingsIndex < totalPage - 2

  if (!showLeftDots && showRightDots) {
    const leftItemCount = 3 + 2 * siblings
    const leftRange = range(1, leftItemCount + 1)

    return [...leftRange, ' ...', totalPage]
  } else if (showLeftDots && !showRightDots) {
    const rightItemCount = 3 + 2 * siblings
    const rightRange = range(totalPage - rightItemCount + 1, totalPage + 1)

    return [1, '... ', ...rightRange]
  } else {
    const middleRange = range(leftSiblingsIndex, rightSiblingsIndex + 1)

    return [1, '... ', ...middleRange, ' ...', totalPage]
  }
}

function range(start: number, end: number) {
  if (end === undefined) {
    end = start
    start = 0
  }

  const result = []
  let current = start

  while (current < end) {
    result.push(current)
    current += 1
  }

  return result
}

export const Pagination = ({
  className,
  getPage,
  limit,
  page,
  options = [
    { title: '10', value: '10' },
    { title: '20', value: '20' },
    { title: '30', value: '30' },
    { title: '50', value: '50' },
    { title: '100', value: '100' },
  ],
  setLimit,
  setPage,
  totalPages,
}: Props) => {
  if (totalPages < page) {
    setPage(totalPages ? totalPages : 1)
  }
  if (totalPages === 0) {
    totalPages = 1
  }

  const array = returnPaginationRange(totalPages, page, 1)

  const onPageClick = (value: number | string) => {
    hahdlePageChange(value, page, setPage, totalPages)
  }

  const onPageKeyPress = (e: React.KeyboardEvent, value: number | string) => {
    if (e.code === 'Enter') {
      hahdlePageChange(value, page, setPage, totalPages)
    }
  }

  const onLimitChange = (value: number) => {
    setLimit(value)
  }

  useEffect(() => {
    getPage(page, limit)
  }, [page, limit])

  return (
    <div className={`${s.container} ${className}`}>
      <ul className={s.items}>
        <li
          className={page === 1 ? s.leftItem : ''}
          onClick={() => !(page === 1) && onPageClick('&lsaquo;')}
          onKeyUp={e => !(page === 1) && onPageKeyPress(e, '&lsaquo;')}
          tabIndex={!(page === 1) ? 2 : undefined}
        >
          <span>&lsaquo;</span>
        </li>
        {array.map((value, id) => (
          <li
            className={`${value === page ? s.item : ''} ${s.hover}`}
            key={value}
            onClick={() => onPageClick(value)}
            onKeyUp={e => onPageKeyPress(e, value)}
            tabIndex={id + 2}
          >
            {value}
          </li>
        ))}
        <li
          className={page === totalPages ? s.rightItem : ''}
          onClick={() => !(page === totalPages) && onPageClick('&rsaquo;')}
          onKeyUp={e => !(page === totalPages) && onPageKeyPress(e, '&rsaquo;')}
          tabIndex={!(page === totalPages) ? array.length + 2 : undefined}
        >
          <span>&rsaquo;</span>
        </li>
      </ul>
      <div className={s.wrapperForSelect}>
        <div>
          <Typography variant="body2">Показать</Typography>
        </div>
        <Select
          onValueChange={value => onLimitChange(+value)}
          options={options}
          variant={'default'}
          className={s.select}
        />
        <div>
          <Typography variant="body2">на странице</Typography>
        </div>
      </div>
    </div>
  )
}
