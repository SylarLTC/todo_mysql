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
    <div className="text-center">
      <div className="mt-2">
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
      <div className="mt-2">
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px w-1/6"
          aria-label="Pagination"
        >
          <button
            onClick={() => {
              paginateBack();
            }}
            disabled={currentPage * todosPerPage - 10 <= 0 ? true : false}
            className="w-1/2 relative inline-flex justify-center items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Previous</span>
          </button>

          <button
            onClick={() => {
              paginateFront();
            }}
            disabled={currentPage * todosPerPage > totalTodos ? true : false}
            className="w-1/2 relative inline-flex justify-center items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
          </button>
        </nav>
      </div>
    </div>
  );
};
