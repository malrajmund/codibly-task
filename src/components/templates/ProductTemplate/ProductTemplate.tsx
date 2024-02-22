import { useGetProductsQuery } from "../../../redux/services/products/productsApi";
import BasicPagination from "../../atoms/Pagination/Pagination";

const ProductTemplate = () => {
  const { data } = useGetProductsQuery({ page: 1, perPage: 4 });
  return (
    <div>
      ProductTemplate
      <BasicPagination pageCount={11} />
    </div>
  );
};

export default ProductTemplate;
