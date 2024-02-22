import ProductItem from "../../atoms/ProductItem/ProductItem";
import { Grid } from "@mui/material";

const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
  return (
    <Grid sx={{ minHeight: "200px", marginTop: "20px", rowGap: "5px", alignContent: "flex-start" }} container>
      {products.map((product: ProductData) => (
        <ProductItem color={product.color} name={product.name} year={product.year} pantone_value={product.pantone_value} id={product.id} />
      ))}
    </Grid>
  );
};

export default ProductsWrapper;
