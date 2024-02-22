import { FC } from 'react'
import s from './Pagination.module.scss'
import { usePagination } from './usePagination'
import { Typography } from '../Typography'

type PaginationConditionals =
  | {
      perPage?: null
      perPageOptions?: never
      onPerPageChange?: never
    }
  | {
      perPage: number
      perPageOptions: number[]
      onPerPageChange: (itemPerPage: number) => void
    }

export type PaginationProps = {
  count: number
  page: number
  onChange: (page: number) => void
  siblings?: number
  perPage?: number
  perPageOptions?: number[]
  onPerPageChange?: (itemPerPage: number) => void
} & PaginationConditionals

export const Pagination: FC<PaginationProps> = ({
  onChange,
  count,
  page,
  perPage = null,
  perPageOptions,
  onPerPageChange,
  siblings,
}) => {
  const {
    paginationRange,
    isLastPage,
    isFirstPage,
    handlePreviousPageClicked,
    handleNextPageClicked,
    handleMainPageClicked,
  } = usePagination({
    page,
    count,
    onChange,
    siblings,
  })

  const showPerPageSelect = !!perPage && !!perPageOptions && !!onPerPageChange

  return (
    <div className={s.root}>
      <div className={s.container}>
        <PrevButton onClick={handlePreviousPageClicked} disabled={isFirstPage} />

        <MainPaginationButtons
          currentPage={page}
          onClick={handleMainPageClicked}
          paginationRange={paginationRange}
        />

        <NextButton onClick={handleNextPageClicked} disabled={isLastPage} />
      </div>

      {showPerPageSelect && (
        <PerPageSelect
          {...{
            perPage,
            perPageOptions,
            onPerPageChange,
          }}
        />
      )}
    </div>
  )
}

type NavigationButtonProps = {
  onClick: () => void
  disabled?: boolean
}

type PageButtonProps = NavigationButtonProps & {
  page: number
  selected: boolean
}

const Dots: FC = () => {
  return <span className={s.dots}>&#8230;</span>
}
const PageButton: FC<PageButtonProps> = ({ onClick, disabled, selected, page }) => {
  return (
    <button onClick={onClick} disabled={selected || disabled} className={s.pageButton}>
      {page}
    </button>
  )
}
const PrevButton: FC<NavigationButtonProps> = ({ onClick, disabled }) => {
  return (
    <button className={s.item} onClick={onClick} disabled={disabled}>
      <Typography className={s.icon}> {'<'} </Typography>
    </button>
  )
}

const NextButton: FC<NavigationButtonProps> = ({ onClick, disabled }) => {
  return (
    <button className={s.item} onClick={onClick} disabled={disabled}>
      <Typography className={s.icon}> {'>'} </Typography>
    </button>
  )
}

type MainPaginationButtonsProps = {
  paginationRange: (number | string)[]
  currentPage: number
  onClick: (pageNumber: number) => () => void
}

const MainPaginationButtons: FC<MainPaginationButtonsProps> = ({
  paginationRange,
  currentPage,
  onClick,
}) => {
  return (
    <>
      {paginationRange.map((page: number | string, index) => {
        const isSelected = page === currentPage

        if (typeof page !== 'number') {
          return <Dots key={index} />
        }

        return <PageButton key={index} page={page} selected={isSelected} onClick={onClick(page)} />
      })}
    </>
  )
}

export type PerPageSelectProps = {
  perPage: number
  perPageOptions: number[]
  onPerPageChange: (itemPerPage: number) => void
}

export const PerPageSelect: FC<PerPageSelectProps> = ({
  perPage,
  perPageOptions,
  onPerPageChange,
}) => {
  return (
    <div className={s.selectBox}>
      Показать
      {/*  <Select
        className={classNames.select}
        value={perPage}
        options={perPageOptions}
        onChangeValue={onPerPageChange}
      /> */}
      на странице
    </div>
  )
}
