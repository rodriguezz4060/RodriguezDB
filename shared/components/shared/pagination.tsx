import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from '../ui/pagination'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNeighbours = 2 // Количество страниц вокруг текущей
    const totalNumbers = pageNeighbours * 2 + 1 // Общее количество страниц, которые будут отображаться
    const totalBlocks = totalNumbers + 2 // Общее количество блоков (страницы + многоточия)

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours)
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours)
      let pages = Array.from({ length: endPage + 1 - startPage }, (_, i) => startPage + i)

      const hasLeftSpill = startPage > 2
      const hasRightSpill = totalPages - endPage > 1
      const spillOffset = totalNumbers - (pages.length + 1)

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = Array.from(
            { length: spillOffset },
            (_, i) => startPage - i - 1
          ).reverse()
          pages = [...extraPages, ...pages]
          break
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = Array.from({ length: spillOffset }, (_, i) => endPage + i + 1)
          pages = [...pages, ...extraPages]
          break
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [...pages]
          break
        }
      }

      return [1, ...pages, '...', totalPages]
    }

    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className='rounded-[5px]'
          />
        </PaginationItem>
        {getPageNumbers().map((page, index) => (
          <PaginationItem key={index}>
            {typeof page === 'number' ? (
              <PaginationLink
                className='rounded-[5px]'
                isActive={currentPage === page}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='rounded-[5px]'
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
