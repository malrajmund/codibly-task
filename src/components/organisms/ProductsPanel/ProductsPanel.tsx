import { useGetProductsQuery } from "../../../redux/services/products/productsApi";
import BasicPagination from "../../atoms/Pagination/Pagination";
import ProductsWrapper from "../../molecules/ProductsWrapper/ProductsWrapper";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Container from "@mui/material/Container";
import { Box, Skeleton, Typography } from "@mui/material";
import Input from "../../atoms/Input/Input";
import CustomModal from "../../atoms/Modal/Modal";

const skeletonStyle = {
  padding: "5px",
  height: "30px",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  cursor: "pointer",
  width: "100%",
};

const ProductsPanel = () => {
  const queryData = useSelector<AppState>((state) => state.query) as QueryState;
  const { data, isLoading, isFetching, isError } = useGetProductsQuery({
    page: queryData.page,
    perPage: queryData.perPage,
    filter: queryData.filter,
  });

  return (
    <>
      <Container fixed>
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Typography borderBottom={3} variant='h3' sx={{ marginBottom: "5%", borderColor: "#9c27b0" }}>
            Codibly task
          </Typography>
          <Input />
          {!isLoading && !isFetching && !isError ? (
            <>
              <ProductsWrapper products={Array.isArray(data.data) ? data.data : [data.data]} />
              <BasicPagination pageCount={data.total_pages} />
            </>
          ) : (
            <>
              {isError ? (
                <>
                  <div style={{ minHeight: "200px", marginTop: "20px" }}>No results</div>
                  <BasicPagination pageCount={0} />
                </>
              ) : (
                <>
                  <div style={{ minHeight: "200px", marginTop: "20px", width: "66.6%" }}>
                    <Skeleton sx={skeletonStyle} />
                    <Skeleton sx={skeletonStyle} />
                    <Skeleton sx={skeletonStyle} />
                    <Skeleton sx={skeletonStyle} />
                    <Skeleton sx={skeletonStyle} />
                  </div>
                  <BasicPagination pageCount={0} />
                </>
              )}
            </>
          )}
        </Box>
      </Container>
      <CustomModal />
    </>
  );
};

export default ProductsPanel;
