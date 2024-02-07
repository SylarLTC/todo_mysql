interface PaginationProps {
  todosPerPage: number;
  totalTodos: number;
  paginateFront: () => void;
  paginateBack: () => void;
  currentPage: number;
}

export const Pagination = ({
  todosPerPage,
  totalTodos,
  paginateFront,
  paginateBack,
  currentPage,
}: PaginationProps) => {
  return (
    <div className="py-2 text-center">
      <div>
        <p className="text-sm text-gray-700">
          Showing{" "}
          <span className="font-medium">{currentPage * todosPerPage - 10}</span>{" "}
          to
          <span className="font-medium">
            {" "}
            {currentPage * todosPerPage > totalTodos
              ? totalTodos
              : currentPage * todosPerPage}{" "}
          </span>
          of
          <span className="font-medium"> {totalTodos} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Previous</span>
          </button>

          <button
            onClick={() => {
              paginateFront();
            }}
            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
