import { useGetProductsQuery } from "../../../redux/services/products/productsApi";

const ProductTemplate = () => {
  const { data } = useGetProductsQuery({ page: 1, perPage: 4 });
  return <div>ProductTemplate</div>;
};

export default ProductTemplate;
