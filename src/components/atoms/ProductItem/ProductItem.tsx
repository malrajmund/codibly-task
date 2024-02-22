import { Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setModalData } from "../../../redux/reducers/modalReducer/modalReducer";

const ProductItem: React.FC<ProductData> = ({ color, year, pantone_value, id, name }) => {
  const dispatch = useDispatch();
  return (
    <Grid
      key={id}
      sx={{
        backgroundColor: color,
        padding: "5px",
        height: "30px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        gap: "5px",
        margin: "0 auto",
        cursor: "pointer",
        border: "1px solid lightgray",
        color: "black",
      }}
      item
      xs={8}
      onClick={() => dispatch(setModalData({ data: { color: color, year: year, pantone_value: pantone_value, id: id, name: name }, isActive: true }))}
    >
      <Typography>{id} | </Typography>
      <Typography>{name} | </Typography>
      <Typography>{year}</Typography>
    </Grid>
  );
};

export default ProductItem;
