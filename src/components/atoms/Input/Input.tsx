import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQueryProp } from "../../../redux/reducers/queryReducer/queryReducer";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[0-9]*$/;
    if (regex.test(event.target.value) || event.target.value === "") {
      setValue(event.target.value);
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setQueryProp({ prop: "filter", value: value }));
      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      if (value === "") {
        url.searchParams.delete("id");
      } else {
        if (!url.searchParams.has("id")) {
          url.searchParams.append("id", value);
        } else {
          url.searchParams.set("id", value);
        }
      }
      window.history.pushState({}, "", url.toString());
    }, 400);
    return () => clearTimeout(id);
  }, [value]);

  useEffect(() => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const id = url.searchParams.get("id");
    if (id) {
      setValue(id);
      dispatch(setQueryProp({ prop: "id", value: +id }));
    }
  }, []);

  return (
    <TextField
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
      id='outlined-controlled'
      label='Filter by ID'
      variant='outlined'
      autoComplete='off'
      color='secondary'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <FilterAltIcon />
          </InputAdornment>
        ),
      }}
      value={value}
    />
  );
};

export default Input;
