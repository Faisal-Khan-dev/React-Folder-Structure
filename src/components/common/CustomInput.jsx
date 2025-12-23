import React, { useState, forwardRef } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const CustomInput = forwardRef(({
  placeholder,
  max,
  type = "text",
  name,
  startIcon,
  value,
  onChange,
  defaultValue,
  onBlur,
  fullWidth = true,
  height = 55,
  border,
  background = "transparent",
  disabled = false,
  dir,
  error = false,
  sx = {},
  inputProps = {},
  disableNumberSpin = false,
  maxLength,
  id = "",
  className,
  borderRadius = 3,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <TextField
      {...props}
      id={id}
      variant="outlined"
      dir={dir}
      defaultValue={defaultValue}
      onBlur={onBlur}
      fullWidth={fullWidth}
      placeholder={placeholder}
      type={isPassword ? (showPassword ? "text" : "password") : type}
      value={value}
      onChange={onChange}
      disabled={disabled}
      error={error}
      inputRef={ref} // ✅ forwardRef properly
      InputProps={{
        startAdornment: startIcon && (
          <InputAdornment position="start">{startIcon}</InputAdornment>
        ),
        endAdornment: isPassword && (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
        inputProps: {
          name,
          maxLength: type === "number" ? undefined : maxLength,
          onInput:
            type === "number" && maxLength
              ? (e) => (e.target.value = e.target.value.slice(0, maxLength))
              : undefined,
          ...inputProps,
        },
      }}
      sx={{
        ...(disableNumberSpin &&
          type === "number" && {
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              { WebkitAppearance: "none", margin: 0 },
            "& input[type=number]": { MozAppearance: "textfield" },
          }),
        "& .MuiOutlinedInput-root": {
          height: `${height}px`,
          background,
          "& fieldset": { borderColor: error ? "red" : "#ccc", borderRadius: borderRadius, border: { border } },
          "&:hover fieldset": { borderColor: error ? "red" : "#ccc" },
          "&.Mui-focused fieldset": { borderColor: error ? "red" : "#89C441", borderWidth: "1.5px" },
          "& input": { padding: "8px 14px" },
        },
        ...sx,
      }}
    />
  );
});

export default React.memo(CustomInput);
