import React from "react";
import { TextField } from "@mui/material";

function CustomTextarea({
  placeholder,
  value,
  onChange,
  fullWidth = true,
  rows = 4,
  height = 100,
  background = "transparent",
  dir,
  disabled = false,
  sx={}
}) {
  return (
    <TextField
      dir={dir}
      variant="outlined"
      fullWidth={fullWidth}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      multiline
      rows={rows}
      sx={{
        "& .MuiOutlinedInput-root": {
          background,
          height: `${height}px`,
          alignItems: "flex-start",

          "& fieldset": {
            borderColor: "#ccc",
            borderRadius: 3,
            borderWidth: "1px",
          
          },

          "&:hover fieldset": {
            borderColor: "#ccc",
          },

          "&.Mui-focused fieldset": {
            borderColor: "#89C441",
            borderWidth: "1px",
          },

          "& textarea": {
            padding: "8px 14px",
            resize: "none",
          },
        },
        ...sx
      }}
    />
  );
}

export default CustomTextarea;
