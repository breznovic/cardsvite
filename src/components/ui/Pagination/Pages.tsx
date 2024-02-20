import s from '../Pagination.module.scss'
import { Button } from '../Button/button'

type PagesProps = {
  currentPage: number | string
  items?: (number | string)[]
  onPageChange: (page: number) => void
}

export const Pages = ({ currentPage, items, onPageChange }: PagesProps) => {
  return (
    <div className={s.pages}>
      {items?.map((page: number | string, index: number) => {
        const rootClassName = `${s.button} ${page === currentPage ? s.active : ''}`

        return (
          <Button
            className={rootClassName}
            disabled={page === '...'}
            key={index}
            onClick={() => onPageChange(+page)}
          >
            {page}
          </Button>
        )
      })}
    </div>
  )
}
