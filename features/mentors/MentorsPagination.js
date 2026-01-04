import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";

export default function MentorsPagination({ page, totalPages, searchParams }) {
  const isLastPage = page === totalPages;
  const isFirstPage = page === 1;

  return (
    <Pagination className="mt-12">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={
              !isFirstPage
                ? `?${new URLSearchParams({
                    ...searchParams,
                    page: Math.max(page - 1, 1),
                  })}`
                : undefined
            }
            className={isFirstPage && "opacity-50 pointer-events-none"}
          />
        </PaginationItem>

        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          return (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href={`?${new URLSearchParams({
                  ...searchParams,
                  page: pageNumber,
                })}`}
                isActive={pageNumber === page}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={
              !isLastPage
                ? `?${new URLSearchParams({
                    ...searchParams,
                    page: page + 1,
                  })}`
                : undefined
            }
            className={isLastPage && "opacity-50 pointer-events-none"}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
