import {
  Pagination as PG,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import type { IMeta } from "@/types";
import { useSearchParams } from "react-router";

const Pagination = ({ meta }: { meta: IMeta }) => {
  const { totalPage } = meta || {};
  const [searchParams, setSearchParams] = useSearchParams();
  const pagesArray = Array.from({ length: totalPage }, (_, index) => index + 1);
  console.log(meta);

  const currentPageValue: number = Number(searchParams.get("page")) || 1;

  const handlePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params);
  };

  const handlePrev = () => {
    if (currentPageValue > 1) {
      const page = currentPageValue - 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      setSearchParams(params);
    }
  };
  const handleNext = () => {
    if (totalPage > currentPageValue) {
      const page = currentPageValue + 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      setSearchParams(params);
    }
  };

  if (totalPage > 1)
    return (
      <PG>
        <PaginationContent>
          <PaginationItem
            className={cn(
              currentPageValue <= 1 &&
                "pointer-events-none cursor-not-allowed opacity-50"
            )}
          >
            <PaginationPrevious onClick={handlePrev} />
          </PaginationItem>
          {pagesArray.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink isActive={currentPageValue === page} onClick={() => handlePage(page)}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem
            className={cn(
              currentPageValue === totalPage &&
                "pointer-events-none cursor-not-allowed opacity-50"
            )}
          >
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </PG>
    );
};

export default Pagination;
