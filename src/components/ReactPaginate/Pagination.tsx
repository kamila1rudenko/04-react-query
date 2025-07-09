import ReactPaginate from "react-paginate";
import css from "./ReactPaginate.module.css";

interface ReactPaginateProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

export default function ReactPaginate({
  page,
  total,
  onChange,
}: ReactPaginateProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => setPage(selected + 1)}
      forcePage={page - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}
