import Pagination from "@mui/material/Pagination";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQueryProp } from "../../../redux/reducers/queryReducer/queryReducer";

const BasicPagination: React.FC<Pagination> = ({ pageCount }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState<number | undefined>(0);

  const handleChange = (event: ChangeEvent<unknown>, page: number) => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    if (!url.searchParams.has("page")) {
      url.searchParams.append("page", page.toString());
    } else {
      url.searchParams.set("page", page.toString());
    }
    window.history.pushState({}, "", url.toString());
    dispatch(setQueryProp({ prop: "page", value: page }));
    setCurrentPage(page);
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const page = url.searchParams.get("page");
    if (page) {
      setCurrentPage(+page);
      dispatch(setQueryProp({ prop: "page", value: +page }));
    }
  }, []);

  return (
    <Pagination
      sx={{ marginTop: "20px", marginBottom: "20%" }}
      onChange={(event, page) => handleChange(event, page)}
      page={currentPage}
      count={pageCount}
      color='secondary'
    />
  );
};

export default BasicPagination;
