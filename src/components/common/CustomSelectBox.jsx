import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

function CustomSelectBox({
  value,
  onChange,
  options = [],
  placeholder = "Select",
  fullWidth = true,
  error,
  height = 55,
  background = "#F7F8F9",
  disabled = false,
  sx={}
}) {
  return (
    <FormControl fullWidth={fullWidth} sx={{ height }}>
      <Select
        value={value}
        error={error}
        onChange={onChange}
        displayEmpty
        disabled={disabled}
        sx={{
          height: `${height}px`,
          backgroundColor: background,
          borderRadius: 3,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ccc",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ccc !important",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#89C441",
            borderWidth: "1px",
          },

          "& .MuiSelect-select": {
            padding: "8px 14px",
            color: value ? "#000" : "#6c757d",
          },
          ...sx,
        }}
      >
        {/* Placeholder */}
        <MenuItem value="">
          <em>{placeholder}</em>
        </MenuItem>

        {/* Dynamic Options */}
        {options.map((opt, index) => (
          <MenuItem key={index} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelectBox;
