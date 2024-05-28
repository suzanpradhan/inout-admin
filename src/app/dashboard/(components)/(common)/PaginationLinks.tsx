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

const PaginationLinks = ({ data }: { data: PaginationType }) => {
  // console.log(data);
  const totalPages = Array.from({ length: data?.total_page }, (_, i) => i + 1);
  // console.log(totalPages);
  return (
    data && (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={data?.previous}
              className="hover:bg-slate-700 hover:text-slate-50"
            />
          </PaginationItem>

          {totalPages && totalPages.length > 0 ? (
            totalPages
              .slice(0, Math.min(3, totalPages.length))
              .map((page, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    href="#"
                    className="hover:bg-slate-700 hover:text-slate-50"
                    isActive={page === data.current_page}
                    // onClick={}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))
          ) : (
            <></>
          )}
          {totalPages &&
            totalPages.length > 4 &&
            data.current_page < totalPages.length - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

          {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
          <PaginationItem>
            <PaginationNext
              href={data?.next}
              className="hover:bg-slate-700 hover:text-slate-50"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    )
  );
};

export default PaginationLinks;
