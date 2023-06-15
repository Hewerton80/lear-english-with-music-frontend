import { useCallback, useState } from "react";

interface ChangePageArgs {
  onBeforeChange?: () => void;
  onAfterChange?: () => void;
  toPage: number;
}

export function usePaginations() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);

  const changePage = useCallback((changePageProps: ChangePageArgs) => {
    changePageProps?.onBeforeChange?.()
    setCurrentPage(changePageProps.toPage)
    changePageProps?.onAfterChange?.()
  }, []);
}
