import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function CustomCheckbox({
  label = "",
  checked = false,
  onChange,
  disabled = false,
  size = "medium",
  sx = {}, 
  labelSx = {},
  fontWeight = '600'
}) {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          size={size}
          sx={{
            color: "#555",
            "&.Mui-checked": {
              color: "#89C441", // same as your CustomInput focus color
            },
            height: "auto", // default auto, can override in sx
            width: "auto", // default auto, can override in sx
            border: "none", // default none, can override in sx
            borderRadius: 0, // default 0, can override in sx
            ...sx,
          }}
        />
      }
      label={label}
      sx={{
        "& .MuiFormControlLabel-label": {
          fontSize: "15px",
          fontWeight : {fontWeight},
          color: disabled ? "#aaa" : "#333",
          ...labelSx,
        },
      }}
    />
  );
}
