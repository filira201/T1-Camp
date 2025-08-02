import { Pagination } from '@heroui/react';

interface MyPaginationProps {
  currentPage: number;
  total: number;
  handlePageChange: (page: number) => void;
}

const MyPagination = ({ currentPage, total, handlePageChange }: MyPaginationProps) => {
  return (
    <Pagination
      className="cursor-pointer"
      size="lg"
      page={currentPage}
      total={total}
      onChange={handlePageChange}
      siblings={2}
      boundaries={2}
      showControls
      isCompact
    />
  );
};

export default MyPagination;
