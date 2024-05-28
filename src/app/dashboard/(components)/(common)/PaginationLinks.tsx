import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { PaginationType } from '@/core/types/responseTypes';

const PaginationLinks = ({
  data,
  setPageNumber,
}: {
  data: PaginationType;
  setPageNumber: Function;
}) => {
  const totalPages = Array.from({ length: data?.total_page }, (_, i) => i + 1); // Array of page numbers

  // Function to calculate the range of pages to display
  const getPageRange = () => {
    const currentPage = data.current_page;
    const lastPage = totalPages.length;

    if (lastPage <= 3) {
      return totalPages;
    } else if (currentPage <= 2) {
      return totalPages.slice(0, 3);
    } else if (currentPage >= lastPage - 1) {
      return totalPages.slice(lastPage - 3, lastPage);
    } else {
      return totalPages.slice(currentPage - 2, currentPage + 1);
    }
  };
  return (
    data && (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className={`${data?.current_page <= 1 ? 'pointer-events-none opacity-50' : 'hover:bg-slate-700 hover:text-slate-50'}`}
              onClick={() => {
                const currPageNum = data?.current_page;
                if (currPageNum > 0) {
                  setPageNumber(currPageNum - 1);
                }
              }}
            />
          </PaginationItem>

          {getPageRange().map((page, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                className="hover:bg-slate-700 hover:text-slate-50"
                isActive={page === data.current_page}
                onClick={() => setPageNumber(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages.length > 3 && data?.current_page < data?.total_page && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              className={`${data?.current_page == data?.total_page ? 'pointer-events-none opacity-50' : 'hover:bg-slate-700 hover:text-slate-50'}`}
              onClick={() => {
                const currPageNum = data?.current_page;
                const totalPage = data?.total_page;
                if (currPageNum < totalPage) {
                  setPageNumber(currPageNum + 1);
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  );
};

export default PaginationLinks;
