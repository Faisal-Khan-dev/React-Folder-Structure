import React from "react";
import { Button, CircularProgress } from "@mui/material";

function CustomButton({
  children,
  onClick,
  variant = "contained",
  bgColor = "#89C441",
  color = "#fff",
  rounded = 2,
  type = "submit",
  fullWidth = false,
  width,
  height = 40,
  fontSize = 14,
  disabled = false,
  loading = false, // <-- NEW
  startIcon,
  endIcon,
  sx = {},
  border,
  
}) {
  return (
    <Button
    
      type={type}
      border={border}
      variant={variant}
      onClick={onClick}
      disabled={disabled || loading} // <-- loading pe disable
      fullWidth={fullWidth}
      startIcon={!loading ? startIcon : null} // loader ho to icon hide
      endIcon={!loading ? endIcon : null}
      sx={{
        backgroundColor: bgColor,
        color,
        borderRadius: rounded,
        width,
        height: `${height}px`,
        fontSize: `${fontSize}px`,
        textTransform: "none",
        boxShadow: "0px 2px 4px rgba(0,0,0,0.15)",
        cursor: disabled || loading ? "not-allowed" : "pointer", // <-- cursor change

        "&.Mui-disabled": {
          backgroundColor: bgColor + " !important",
          color: color + " !important",
          opacity: 0.7, // optional
        },

        ...sx,
      }}
    >
      {loading ? <CircularProgress size={22} color="inherit" /> : children}
    </Button>
  );
}

export default CustomButton;



// {
//   "userManagement": {
//     "imageHint": "We support PNGs, JPEGs under 10MB",

//     "personalInfo": {
//       "title": "Personal Information",
//       "fullName": "Full Name",
//       "fatherName": "Father Name",
//       "email": "Email Address",
//       "cnic": "CNIC",
//       "phone": "Phone Number",
//       "gender": "Gender",
//       "area": "Area",
//       "address": "Address"
//     },

//     "genderOptions": {
//       "male": "Male",
//       "female": "Female",
//       "other": "Other"
//     },

//     "security": {
//       "title": "Password & Security",
//       "status": "Status",
//       "active": "Active",
//       "inactive": "Inactive",
//       "password": "Password",
//       "changePassword": "Do you want to change the password?",
//       "yes": "Yes"
//     },

//     "role": {
//       "label": "Role",
//       "placeholder": "Select Role"
//     },

//     "buttons": {
//       "update": "Update",
//       "create": "Create",
//       "close": "Close"
//     }
//   }
// }
// 🔹 ur.json
// json
// Copy code
// {
//   "userManagement": {
//     "imageHint": "ہم 10MB سے کم PNG اور JPEG فائلز کو سپورٹ کرتے ہیں",

//     "personalInfo": {
//       "title": "ذاتی معلومات",
//       "fullName": "پورا نام",
//       "fatherName": "والد کا نام",
//       "email": "ای میل ایڈریس",
//       "cnic": "شناختی کارڈ نمبر",
//       "phone": "فون نمبر",
//       "gender": "جنس",
//       "area": "علاقہ",
//       "address": "پتہ"
//     },

//     "genderOptions": {
//       "male": "مرد",
//       "female": "عورت",
//       "other": "دیگر"
//     },

//     "security": {
//       "title": "پاس ورڈ اور سیکیورٹی",
//       "status": "اسٹیٹس",
//       "active": "فعال",
//       "inactive": "غیر فعال",
//       "password": "پاس ورڈ",
//       "changePassword": "کیا آپ پاس ورڈ تبدیل کرنا چاہتے ہیں؟",
//       "yes": "ہاں"
//     },

//     "role": {
//       "label": "کردار",
//       "placeholder": "کردار منتخب کریں"
//     },

//     "buttons": {
//       "update": "اپڈیٹ",
//       "create": "بنائیں",
//       "close": "بند کریں"
//     }
//   }
// }
// ✅ Step 2: Component میں useTranslation لگاؤ
// js
// Copy code
// import { useTranslation } from "react-i18next";
// js
// Copy code
// const { t, i18n } = useTranslation();
// const um = t("userManagement", { returnObjects: true });
// ✅ Step 3: Hard-coded English کو replace کرو
// 🔹 Image hint
// jsx
// Copy code
// <p className="text-sm font-semibold mt-4 text-gray-500">
//   {um.imageHint}
// </p>
// 🔹 Section titles
// jsx
// Copy code
// <h3 className="text-xl font-semibold text-[#1447E6]">
//   {um.personalInfo.title}
// </h3>
// jsx
// Copy code
// <h3 className="text-xl font-semibold text-[#1447E6] mt-6">
//   {um.security.title}
// </h3>
// 🔹 Inputs (example)
// jsx
// Copy code
// <Input
//   label={um.personalInfo.fullName}
//   placeholder={um.personalInfo.fullName}
//   value={form.userName}
//   onChange={handleChange("userName")}
//   error={errors.userName}
// />
// jsx
// Copy code
// <Input
//   label={um.personalInfo.fatherName}
//   placeholder={um.personalInfo.fatherName}
//   value={form.fatherName}
//   onChange={handleChange("fatherName")}
//   error={errors.fatherName}
// />
// 🔹 Gender Select
// jsx
// Copy code
// <label className="font-semibold">
//   {um.personalInfo.gender}
//   <CustomSelectBox
//     value={form.gender}
//     onChange={handleChange("gender")}
//     options={[
//       { value: "male", label: um.genderOptions.male },
//       { value: "female", label: um.genderOptions.female },
//       { value: "other", label: um.genderOptions.other }
//     ]}
//   />
// </label>
// 🔹 Status
// jsx
// Copy code
// <label>{um.security.status}</label>

// <CustomSelectBox
//   value={form.status}
//   onChange={handleChange("status")}
//   options={[
//     { value: "active", label: um.security.active },
//     { value: "inactive", label: um.security.inactive }
//   ]}
// />
// 🔹 Password text
// jsx
// Copy code
// <p>{um.security.changePassword}</p>

// <CustomButton
//   children={um.security.yes}
//   onClick={() => setShowPasswordField(true)}
// />
// 🔹 Role
// jsx
// Copy code
// <label className="font-semibold">
//   {um.role.label}
//   <CustomSelectBox
//     placeholder={um.role.placeholder}
//     value={form.roleTitle}
//     onChange={handleChange("roleTitle")}
//   />
// </label>
// 🔹 Buttons
// jsx
// Copy code
// <CustomButton
//   loading={loader}
//   children={editUser ? um.buttons.update : um.buttons.create}
//   onClick={editUser ? handleUpdate : handleSubmit}
// />

// <CustomButton
//   children={um.buttons.close}
//   onClick={() => navigate("/user-management")}
// />
// ✅ Result
// 🌐 English ↔ Urdu automatic

// 🔁 No logic change

// 📦 Same structure as your other pages

// 🧼 Clean & scalable

// Agar chaho to next step me:

// RTL alignment

// Validation messages Urdu

// Placeholder Urdu

// Tabs / headings Urdu

// bas batao 👍
